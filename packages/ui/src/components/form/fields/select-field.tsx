import type { FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps, SelectOption } from "../types";

export interface SelectFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  options: SelectOption[];
}

export function SelectField<T extends FieldValues = FieldValues>({
  placeholder,
  options,
  ...props
}: SelectFieldProps<T>) {
  return (
    <FieldWrapper {...props}>
      {(field) => (
        <Select
          value={(field.value as string) ?? ""}
          onValueChange={field.onChange}
          disabled={field.disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </FieldWrapper>
  );
}
