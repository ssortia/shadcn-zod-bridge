import * as React from "react";
import type { FieldValues } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps } from "../types";

export interface DateFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
}

export function DateField<T extends FieldValues = FieldValues>({
  placeholder = "Pick a date",
  ...props
}: DateFieldProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <FieldWrapper {...props}>
      {(field) => {
        const date = field.value instanceof Date ? field.value : field.value ? new Date(field.value as string) : undefined;

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                disabled={field.disabled}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : placeholder}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(day) => {
                  field.onChange(day);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        );
      }}
    </FieldWrapper>
  );
}
