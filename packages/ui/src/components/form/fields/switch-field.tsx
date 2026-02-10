import type { FieldValues } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export type SwitchFieldProps<T extends FieldValues = FieldValues> =
  BaseFieldProps<T>;

export function SwitchField<T extends FieldValues = FieldValues>(
  props: SwitchFieldProps<T>
) {
  return (
    <FieldWrapper {...props}>
      {(field) => (
        <Switch
          checked={field.value as boolean}
          onCheckedChange={field.onChange}
          ref={field.ref as React.RefCallback<HTMLButtonElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
