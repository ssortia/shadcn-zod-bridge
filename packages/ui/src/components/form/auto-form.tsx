import * as React from "react";
import { z, type ZodType } from "zod";
import type { FieldValues } from "react-hook-form";
import { ZodForm, type ZodFormProps } from "./zod-form";
import { TextField } from "./fields/text-field";
import { NumberField } from "./fields/number-field";
import { CheckboxField } from "./fields/checkbox-field";
import { SelectField } from "./fields/select-field";
import { DateField } from "./fields/date-field";
import { TextareaField } from "./fields/textarea-field";
import { SwitchField } from "./fields/switch-field";
import type { SelectOption } from "./types";
import { Button } from "@/components/ui/button";

type FieldConfigItem = {
  fieldType?:
    | "text"
    | "number"
    | "checkbox"
    | "switch"
    | "select"
    | "textarea"
    | "date"
    | "combobox"
    | "radio-group"
    | "slider";
  label?: string;
  description?: string;
  placeholder?: string;
  options?: SelectOption[];
  hidden?: boolean;
};

export type FieldConfig<T extends ZodType<FieldValues> = ZodType<FieldValues>> = Partial<
  Record<keyof z.infer<T>, FieldConfigItem>
>;

export interface AutoFormProps<T extends ZodType<FieldValues>>
  extends Omit<ZodFormProps<T>, "children"> {
  fieldConfig?: FieldConfig<T>;
  submitLabel?: string;
  children?: React.ReactNode;
}

function toTitleCase(str: string): string {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // "URLPath" → "URL Path"
    .replace(/([a-z\d])([A-Z])/g, "$1 $2")      // "camelCase" → "camel Case"
    .replace(/[_-]+/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

function unwrapZodType(schema: ZodType): { inner: ZodType; isOptional: boolean } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = schema;
  let isOptional = false;

  while (true) {
    if (current instanceof z.ZodOptional || current instanceof z.ZodNullable) {
      isOptional = true;
      current = current._def.innerType;
    } else if (current instanceof z.ZodDefault) {
      current = current._def.innerType;
    } else if (current instanceof z.ZodPipe) {
      current = current._def.in;
    } else {
      break;
    }
  }

  return { inner: current, isOptional };
}

function inferField(
  name: string,
  schema: ZodType,
  config?: FieldConfigItem
): React.ReactNode {
  if (config?.hidden) return null;

  const { inner, isOptional } = unwrapZodType(schema);
  const label = config?.label ?? toTitleCase(name);
  const required = !isOptional;
  const description = config?.description;
  const placeholder = config?.placeholder;

  if (config?.fieldType) {
    switch (config.fieldType) {
      case "textarea":
        return (
          <TextareaField
            key={name}
            name={name}
            label={label}
            description={description}
            placeholder={placeholder}
            required={required}
          />
        );
      case "switch":
        return (
          <SwitchField
            key={name}
            name={name}
            label={label}
            description={description}
            required={required}
          />
        );
      case "select":
        return (
          <SelectField
            key={name}
            name={name}
            label={label}
            description={description}
            placeholder={placeholder}
            options={config.options ?? []}
            required={required}
          />
        );
      case "date":
        return (
          <DateField
            key={name}
            name={name}
            label={label}
            description={description}
            placeholder={placeholder}
            required={required}
          />
        );
      default:
        break;
    }
  }

  if (inner instanceof z.ZodString) {
    return (
      <TextField
        key={name}
        name={name}
        label={label}
        description={description}
        placeholder={placeholder}
        required={required}
      />
    );
  }

  if (inner instanceof z.ZodNumber) {
    return (
      <NumberField
        key={name}
        name={name}
        label={label}
        description={description}
        placeholder={placeholder}
        required={required}
      />
    );
  }

  if (inner instanceof z.ZodBoolean) {
    return (
      <CheckboxField
        key={name}
        name={name}
        label={label}
        description={description}
        required={required}
      />
    );
  }

  if (inner instanceof z.ZodEnum) {
    // Zod v4 exposes no public accessor for enum members.
    // _def.entries is the stable internal Record documented in CLAUDE.md.
    type ZodEnumDef = { _def: { entries: Record<string, string> } };
    const entries = (inner as unknown as ZodEnumDef)._def.entries;
    const values = Object.values(entries);
    const options: SelectOption[] =
      config?.options ??
      values.map((v) => ({ label: toTitleCase(v), value: v }));
    return (
      <SelectField
        key={name}
        name={name}
        label={label}
        description={description}
        placeholder={placeholder}
        options={options}
        required={required}
      />
    );
  }

  if (inner instanceof z.ZodDate) {
    return (
      <DateField
        key={name}
        name={name}
        label={label}
        description={description}
        placeholder={placeholder}
        required={required}
      />
    );
  }

  // Fallback to text
  return (
    <TextField
      key={name}
      name={name}
      label={label}
      description={description}
      placeholder={placeholder}
      required={required}
    />
  );
}

export function AutoForm<T extends ZodType<FieldValues>>({
  schema,
  fieldConfig,
  submitLabel = "Submit",
  children,
  ...formProps
}: AutoFormProps<T>) {
  if (!(schema instanceof z.ZodObject)) {
    throw new Error(
      `AutoForm requires a z.object() schema. Received: ${(schema as z.ZodType).constructor?.name ?? typeof schema}`
    );
  }

  const shape = (schema as unknown as z.ZodObject<z.ZodRawShape>).shape;

  return (
    <ZodForm schema={schema} {...formProps}>
      {Object.entries(shape).map(([name, fieldSchema]) =>
        inferField(
          name,
          fieldSchema as ZodType,
          fieldConfig?.[name as keyof z.infer<T>]
        )
      )}
      {children ?? <Button type="submit">{submitLabel}</Button>}
    </ZodForm>
  );
}
