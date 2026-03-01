import type { FieldValues } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export interface SliderFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  min?: number;
  max?: number;
  step?: number;
}

export function SliderField<T extends FieldValues = FieldValues>({
  min = 0,
  max = 100,
  step = 1,
  required,
  ...props
}: SliderFieldProps<T>) {
  return (
    <FieldWrapper required={required} {...props}>
      {(field) => (
        <Slider
          min={min}
          max={max}
          step={step}
          aria-required={required || undefined}
          value={[typeof field.value === "number" ? field.value : min]}
          onValueChange={([val]) => field.onChange(val)}
          disabled={field.disabled}
        />
      )}
    </FieldWrapper>
  );
}
