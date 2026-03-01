import * as React from "react";
import type { FieldValues } from "react-hook-form";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FieldWrapper } from "../field-wrapper";
import type { BaseFieldProps, SelectOption } from "../types";

export interface ComboboxFieldProps<T extends FieldValues = FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  options: SelectOption[];
}

export function ComboboxField<T extends FieldValues = FieldValues>({
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  options,
  required,
  ...props
}: ComboboxFieldProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <FieldWrapper required={required} {...props}>
      {(field) => {
        const selectedLabel = options.find(
          (opt) => opt.value === field.value
        )?.label;

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                aria-required={required || undefined}
                className={cn(
                  "w-full justify-between",
                  !field.value && "text-muted-foreground"
                )}
                disabled={field.disabled}
              >
                {selectedLabel ?? placeholder}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
              <Command>
                <CommandInput placeholder={searchPlaceholder} />
                <CommandList>
                  <CommandEmpty>{emptyMessage}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        keywords={[option.label]}
                        onSelect={(val) => {
                          field.onChange(val === field.value ? "" : val);
                          setOpen(false);
                        }}
                      >
                        {option.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            field.value === option.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        );
      }}
    </FieldWrapper>
  );
}
