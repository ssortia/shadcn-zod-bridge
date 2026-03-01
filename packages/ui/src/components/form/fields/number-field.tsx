import type { FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export interface NumberFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export function NumberField<T extends FieldValues = FieldValues>({
  placeholder,
  min,
  max,
  step,
  required,
  ...props
}: NumberFieldProps<T>) {
  return (
    <FieldWrapper required={required} {...props}>
      {(field) => (
        <Input
          type="number"
          placeholder={placeholder}
          aria-required={required || undefined}
          min={min}
          max={max}
          step={step}
          value={field.value === undefined || field.value === null ? "" : String(field.value)}
          onChange={(e) => {
            const val = e.target.value;
            field.onChange(val === "" ? undefined : Number(val));
          }}
          onBlur={field.onBlur}
          name={field.name}
          ref={field.ref as React.RefCallback<HTMLInputElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
