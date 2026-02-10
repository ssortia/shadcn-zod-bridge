import type { FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export type CheckboxFieldProps<T extends FieldValues = FieldValues> =
  BaseFieldProps<T>;

export function CheckboxField<T extends FieldValues = FieldValues>(
  props: CheckboxFieldProps<T>
) {
  return (
    <FieldWrapper {...props}>
      {(field) => (
        <Checkbox
          checked={field.value as boolean}
          onCheckedChange={field.onChange}
          ref={field.ref as React.RefCallback<HTMLButtonElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
