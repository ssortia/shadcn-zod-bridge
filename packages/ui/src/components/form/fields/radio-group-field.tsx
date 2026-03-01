import type { FieldValues } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps, SelectOption } from "../types";

export interface RadioGroupFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  options: SelectOption[];
}

export function RadioGroupField<T extends FieldValues = FieldValues>({
  options,
  required,
  ...props
}: RadioGroupFieldProps<T>) {
  return (
    <FieldWrapper required={required} {...props}>
      {(field) => (
        <RadioGroup
          value={(field.value as string) ?? ""}
          onValueChange={field.onChange}
          aria-required={required || undefined}
          disabled={field.disabled}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`${field.name}-${option.value}`} />
              <Label htmlFor={`${field.name}-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </FieldWrapper>
  );
}
