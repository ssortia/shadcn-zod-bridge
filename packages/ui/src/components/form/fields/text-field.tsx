import type { FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export interface TextFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  type?: "text" | "email" | "password" | "url" | "tel";
}

export function TextField<T extends FieldValues = FieldValues>({
  type = "text",
  placeholder,
  ...props
}: TextFieldProps<T>) {
  return (
    <FieldWrapper {...props}>
      {(field) => (
        <Input
          type={type}
          placeholder={placeholder}
          value={(field.value as string) ?? ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          ref={field.ref as React.RefCallback<HTMLInputElement>}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
