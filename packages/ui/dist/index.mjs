// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/input.tsx
import { jsx } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx2 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/select.tsx
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx3(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx3(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx3(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx3(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx3(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx3(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsx3(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx3(CheckIcon, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ jsx3(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx3(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx3(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/components/ui/textarea.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/checkbox.tsx
import { CheckIcon as CheckIcon2 } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx5 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx5(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx5(CheckIcon2, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/ui/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx6 } from "react/jsx-runtime";
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx6(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}

// src/components/ui/radio-group.tsx
import { CircleIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx7(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx7(CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}

// src/components/ui/slider.tsx
import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { jsx as jsx8, jsxs as jsxs2 } from "react/jsx-runtime";
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxs2(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx8(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsx8(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx8(
          SliderPrimitive.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}

// src/components/ui/popover.tsx
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx9 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx9(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx9(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx9(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx9(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsx9(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-1 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "popover-title",
      className: cn("font-medium", className),
      ...props
    }
  );
}
function PopoverDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/components/ui/dialog.tsx
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

// src/components/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx as jsx10 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx10(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/dialog.tsx
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx11(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx11(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx11(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx11(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx11(DialogOverlay, {}),
    /* @__PURE__ */ jsxs3(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs3(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx11(XIcon, {}),
                /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx11(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx11(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx11(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs4(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx12(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx12(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx12(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx12(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx12(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx12(
          CommandPrimitive.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    CommandPrimitive.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/calendar.tsx
import * as React2 from "react";
import {
  ChevronDownIcon as ChevronDownIcon2,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames
} from "react-day-picker";
import { jsx as jsx13 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx13(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx13(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx13(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx13(
              ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsx13(ChevronDownIcon2, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx13("td", { ...props2, children: /* @__PURE__ */ jsx13("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React2.useRef(null);
  React2.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx13(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// src/components/ui/form.tsx
import * as React3 from "react";
import { Slot as Slot2 } from "radix-ui";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";
import { jsx as jsx14 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React3.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx14(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx14(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React3.useContext(FormFieldContext);
  const itemContext = React3.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React3.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React3.useId();
  return /* @__PURE__ */ jsx14(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx14(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx14(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx14(
    Slot2.Root,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx14(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}

// src/components/form/field-wrapper.tsx
import { useFormContext as useFormContext2 } from "react-hook-form";
import { jsx as jsx15, jsxs as jsxs5 } from "react/jsx-runtime";
function FieldWrapper({
  name,
  label,
  description,
  required,
  disabled,
  className,
  children
}) {
  const { control } = useFormContext2();
  return /* @__PURE__ */ jsx15(
    FormField,
    {
      control,
      name,
      disabled,
      render: ({ field }) => /* @__PURE__ */ jsxs5(FormItem, { className, children: [
        label && /* @__PURE__ */ jsxs5(FormLabel, { children: [
          label,
          required && /* @__PURE__ */ jsx15("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ jsx15(FormControl, { children: children(field) }),
        description && /* @__PURE__ */ jsx15(FormDescription, { children: description }),
        /* @__PURE__ */ jsx15(FormMessage, {})
      ] })
    }
  );
}

// src/components/form/zod-form.tsx
import { useForm, FormProvider as FormProvider2 } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jsx as jsx16 } from "react/jsx-runtime";
function ZodForm({
  schema,
  onSubmit,
  defaultValues,
  children,
  className
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues
  });
  return /* @__PURE__ */ jsx16(FormProvider2, { ...form, children: /* @__PURE__ */ jsx16(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: cn("space-y-6", className),
      children
    }
  ) });
}

// src/components/form/auto-form.tsx
import { z } from "zod";

// src/components/form/fields/text-field.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function TextField({
  type = "text",
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ jsx17(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx17(
    Input,
    {
      type,
      placeholder,
      value: field.value ?? "",
      onChange: field.onChange,
      onBlur: field.onBlur,
      name: field.name,
      ref: field.ref,
      disabled: field.disabled
    }
  ) });
}

// src/components/form/fields/number-field.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function NumberField({
  placeholder,
  min,
  max,
  step,
  ...props
}) {
  return /* @__PURE__ */ jsx18(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx18(
    Input,
    {
      type: "number",
      placeholder,
      min,
      max,
      step,
      value: field.value === void 0 || field.value === null ? "" : String(field.value),
      onChange: (e) => {
        const val = e.target.value;
        field.onChange(val === "" ? void 0 : Number(val));
      },
      onBlur: field.onBlur,
      name: field.name,
      ref: field.ref,
      disabled: field.disabled
    }
  ) });
}

// src/components/form/fields/checkbox-field.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function CheckboxField(props) {
  return /* @__PURE__ */ jsx19(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx19(
    Checkbox,
    {
      checked: field.value,
      onCheckedChange: field.onChange,
      ref: field.ref,
      disabled: field.disabled
    }
  ) });
}

// src/components/form/fields/select-field.tsx
import { jsx as jsx20, jsxs as jsxs6 } from "react/jsx-runtime";
function SelectField({
  placeholder,
  options,
  ...props
}) {
  return /* @__PURE__ */ jsx20(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsxs6(
    Select,
    {
      value: field.value ?? "",
      onValueChange: field.onChange,
      disabled: field.disabled,
      children: [
        /* @__PURE__ */ jsx20(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx20(SelectValue, { placeholder }) }),
        /* @__PURE__ */ jsx20(SelectContent, { children: options.map((option) => /* @__PURE__ */ jsx20(SelectItem, { value: option.value, children: option.label }, option.value)) })
      ]
    }
  ) });
}

// src/components/form/fields/date-field.tsx
import * as React4 from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function DateField({
  placeholder = "Pick a date",
  ...props
}) {
  const [open, setOpen] = React4.useState(false);
  return /* @__PURE__ */ jsx21(FieldWrapper, { ...props, children: (field) => {
    const date = field.value instanceof Date ? field.value : field.value ? new Date(field.value) : void 0;
    return /* @__PURE__ */ jsxs7(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx21(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs7(
        Button,
        {
          variant: "outline",
          className: cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          ),
          disabled: field.disabled,
          children: [
            /* @__PURE__ */ jsx21(CalendarIcon, { className: "mr-2 h-4 w-4" }),
            date ? format(date, "PPP") : placeholder
          ]
        }
      ) }),
      /* @__PURE__ */ jsx21(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx21(
        Calendar,
        {
          mode: "single",
          selected: date,
          onSelect: (day) => {
            field.onChange(day);
            setOpen(false);
          }
        }
      ) })
    ] });
  } });
}

// src/components/form/fields/textarea-field.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function TextareaField({
  placeholder,
  rows,
  ...props
}) {
  return /* @__PURE__ */ jsx22(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx22(
    Textarea,
    {
      placeholder,
      rows,
      value: field.value ?? "",
      onChange: field.onChange,
      onBlur: field.onBlur,
      name: field.name,
      ref: field.ref,
      disabled: field.disabled
    }
  ) });
}

// src/components/form/fields/switch-field.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function SwitchField(props) {
  return /* @__PURE__ */ jsx23(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx23(
    Switch,
    {
      checked: field.value,
      onCheckedChange: field.onChange,
      ref: field.ref,
      disabled: field.disabled
    }
  ) });
}

// src/components/form/auto-form.tsx
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
function toTitleCase(str) {
  return str.replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/^\w/, (c) => c.toUpperCase()).trim();
}
function unwrapZodType(schema) {
  let current = schema;
  let isOptional = false;
  while (true) {
    if (current instanceof z.ZodOptional || current instanceof z.ZodNullable) {
      isOptional = true;
      current = current._def.innerType;
    } else if (current instanceof z.ZodDefault) {
      current = current._def.innerType;
    } else if (current instanceof z.ZodPipe) {
      current = current._def.in;
    } else {
      break;
    }
  }
  return { inner: current, isOptional };
}
function inferField(name, schema, config) {
  if (config?.hidden) return null;
  const { inner, isOptional } = unwrapZodType(schema);
  const label = config?.label ?? toTitleCase(name);
  const required = !isOptional;
  const description = config?.description;
  const placeholder = config?.placeholder;
  if (config?.fieldType) {
    switch (config.fieldType) {
      case "textarea":
        return /* @__PURE__ */ jsx24(
          TextareaField,
          {
            name,
            label,
            description,
            placeholder,
            required
          },
          name
        );
      case "switch":
        return /* @__PURE__ */ jsx24(
          SwitchField,
          {
            name,
            label,
            description,
            required
          },
          name
        );
      case "select":
        return /* @__PURE__ */ jsx24(
          SelectField,
          {
            name,
            label,
            description,
            placeholder,
            options: config.options ?? [],
            required
          },
          name
        );
      case "date":
        return /* @__PURE__ */ jsx24(
          DateField,
          {
            name,
            label,
            description,
            placeholder,
            required
          },
          name
        );
      default:
        break;
    }
  }
  if (inner instanceof z.ZodString) {
    return /* @__PURE__ */ jsx24(
      TextField,
      {
        name,
        label,
        description,
        placeholder,
        required
      },
      name
    );
  }
  if (inner instanceof z.ZodNumber) {
    return /* @__PURE__ */ jsx24(
      NumberField,
      {
        name,
        label,
        description,
        placeholder,
        required
      },
      name
    );
  }
  if (inner instanceof z.ZodBoolean) {
    return /* @__PURE__ */ jsx24(
      CheckboxField,
      {
        name,
        label,
        description,
        required
      },
      name
    );
  }
  if (inner instanceof z.ZodEnum) {
    const entries = inner._def.entries;
    const values = Object.values(entries);
    const options = config?.options ?? values.map((v) => ({ label: toTitleCase(v), value: v }));
    return /* @__PURE__ */ jsx24(
      SelectField,
      {
        name,
        label,
        description,
        placeholder,
        options,
        required
      },
      name
    );
  }
  if (inner instanceof z.ZodDate) {
    return /* @__PURE__ */ jsx24(
      DateField,
      {
        name,
        label,
        description,
        placeholder,
        required
      },
      name
    );
  }
  return /* @__PURE__ */ jsx24(
    TextField,
    {
      name,
      label,
      description,
      placeholder,
      required
    },
    name
  );
}
function AutoForm({
  schema,
  fieldConfig,
  submitLabel = "Submit",
  children,
  ...formProps
}) {
  const shape = schema.shape;
  return /* @__PURE__ */ jsxs8(ZodForm, { schema, ...formProps, children: [
    Object.entries(shape).map(
      ([name, fieldSchema]) => inferField(
        name,
        fieldSchema,
        fieldConfig?.[name]
      )
    ),
    children ?? /* @__PURE__ */ jsx24(Button, { type: "submit", children: submitLabel })
  ] });
}

// src/components/form/fields/radio-group-field.tsx
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
function RadioGroupField({
  options,
  ...props
}) {
  return /* @__PURE__ */ jsx25(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx25(
    RadioGroup,
    {
      value: field.value ?? "",
      onValueChange: field.onChange,
      disabled: field.disabled,
      children: options.map((option) => /* @__PURE__ */ jsxs9("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx25(RadioGroupItem, { value: option.value, id: `${field.name}-${option.value}` }),
        /* @__PURE__ */ jsx25(Label, { htmlFor: `${field.name}-${option.value}`, children: option.label })
      ] }, option.value))
    }
  ) });
}

// src/components/form/fields/slider-field.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function SliderField({
  min = 0,
  max = 100,
  step = 1,
  ...props
}) {
  return /* @__PURE__ */ jsx26(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ jsx26(
    Slider,
    {
      min,
      max,
      step,
      value: [typeof field.value === "number" ? field.value : min],
      onValueChange: ([val]) => field.onChange(val),
      disabled: field.disabled
    }
  ) });
}

// src/components/form/fields/combobox-field.tsx
import * as React5 from "react";
import { CheckIcon as CheckIcon3, ChevronsUpDownIcon } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs10 } from "react/jsx-runtime";
function ComboboxField({
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  options,
  ...props
}) {
  const [open, setOpen] = React5.useState(false);
  return /* @__PURE__ */ jsx27(FieldWrapper, { ...props, children: (field) => {
    const selectedLabel = options.find(
      (opt) => opt.value === field.value
    )?.label;
    return /* @__PURE__ */ jsxs10(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx27(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs10(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: cn(
            "w-full justify-between",
            !field.value && "text-muted-foreground"
          ),
          disabled: field.disabled,
          children: [
            selectedLabel ?? placeholder,
            /* @__PURE__ */ jsx27(ChevronsUpDownIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx27(PopoverContent, { className: "w-(--radix-popover-trigger-width) p-0", children: /* @__PURE__ */ jsxs10(Command, { children: [
        /* @__PURE__ */ jsx27(CommandInput, { placeholder: searchPlaceholder }),
        /* @__PURE__ */ jsxs10(CommandList, { children: [
          /* @__PURE__ */ jsx27(CommandEmpty, { children: emptyMessage }),
          /* @__PURE__ */ jsx27(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxs10(
            CommandItem,
            {
              value: option.value,
              keywords: [option.label],
              onSelect: (val) => {
                field.onChange(val === field.value ? "" : val);
                setOpen(false);
              },
              children: [
                option.label,
                /* @__PURE__ */ jsx27(
                  CheckIcon3,
                  {
                    className: cn(
                      "ml-auto h-4 w-4",
                      field.value === option.value ? "opacity-100" : "opacity-0"
                    )
                  }
                )
              ]
            },
            option.value
          )) })
        ] })
      ] }) })
    ] });
  } });
}
export {
  AutoForm,
  Button,
  Calendar,
  CalendarDayButton,
  Checkbox,
  CheckboxField,
  ComboboxField,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DateField,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  FieldWrapper,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  NumberField,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  RadioGroup,
  RadioGroupField,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectField,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Slider,
  SliderField,
  Switch,
  SwitchField,
  TextField,
  Textarea,
  TextareaField,
  ZodForm,
  buttonVariants,
  cn,
  useFormField
};
