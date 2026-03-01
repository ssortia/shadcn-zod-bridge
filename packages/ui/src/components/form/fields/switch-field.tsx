import type { FieldValues } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export type SwitchFieldProps<T extends FieldValues = FieldValues> =
  BaseFieldProps<T>;

export function SwitchField<T extends FieldValues = FieldValues>({
  required,
  ...props
}: SwitchFieldProps<T>) {
  return (
    <FieldWrapper required={required} {...props}>
      {(field) => (
        <Switch
          checked={field.value as boolean}
          onCheckedChange={field.onChange}
          aria-required={required || undefined}
          ref={field.ref as React.RefCallback<HTMLButtonElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
