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
  ...props
}: RadioGroupFieldProps<T>) {
  return (
    <FieldWrapper {...props}>
      {(field) => (
        <RadioGroup
          value={(field.value as string) ?? ""}
          onValueChange={field.onChange}
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
