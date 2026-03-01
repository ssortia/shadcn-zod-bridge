import type { FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export interface TextareaFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  rows?: number;
}

export function TextareaField<T extends FieldValues = FieldValues>({
  placeholder,
  rows,
  required,
  ...props
}: TextareaFieldProps<T>) {
  return (
    <FieldWrapper required={required} {...props}>
      {(field) => (
        <Textarea
          placeholder={placeholder}
          aria-required={required || undefined}
          rows={rows}
          value={(field.value as string) ?? ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          ref={field.ref as React.RefCallback<HTMLTextAreaElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
