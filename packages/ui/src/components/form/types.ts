import type { FieldValues, Path } from "react-hook-form";

export interface BaseFieldProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
