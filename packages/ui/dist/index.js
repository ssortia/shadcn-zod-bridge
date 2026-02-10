"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AutoForm: () => AutoForm,
  Button: () => Button,
  Calendar: () => Calendar,
  CalendarDayButton: () => CalendarDayButton,
  Checkbox: () => Checkbox,
  CheckboxField: () => CheckboxField,
  ComboboxField: () => ComboboxField,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  DateField: () => DateField,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  FieldWrapper: () => FieldWrapper,
  Form: () => Form,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  Input: () => Input,
  Label: () => Label,
  NumberField: () => NumberField,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverDescription: () => PopoverDescription,
  PopoverHeader: () => PopoverHeader,
  PopoverTitle: () => PopoverTitle,
  PopoverTrigger: () => PopoverTrigger,
  RadioGroup: () => RadioGroup,
  RadioGroupField: () => RadioGroupField,
  RadioGroupItem: () => RadioGroupItem,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectField: () => SelectField,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Slider: () => Slider,
  SliderField: () => SliderField,
  Switch: () => Switch,
  SwitchField: () => SwitchField,
  TextField: () => TextField,
  Textarea: () => Textarea,
  TextareaField: () => TextareaField,
  ZodForm: () => ZodForm,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  useFormField: () => useFormField
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_radix_ui = require("radix-ui");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui.Label.Root,
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
var import_lucide_react = require("lucide-react");
var import_radix_ui2 = require("radix-ui");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_radix_ui2.Select.Trigger,
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDownIcon, { className: "size-4 opacity-50" }) })
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_radix_ui2.Select.Content,
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_radix_ui2.Select.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_radix_ui2.Select.Label,
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_radix_ui2.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.CheckIcon, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_radix_ui2.Select.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_radix_ui2.Select.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_radix_ui2.Select.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_radix_ui2.Select.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/components/ui/textarea.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_lucide_react2 = require("lucide-react");
var import_radix_ui3 = require("radix-ui");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui3.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_radix_ui3.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/ui/switch.tsx
var import_radix_ui4 = require("radix-ui");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Switch.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_radix_ui4.Switch.Thumb,
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
var import_lucide_react3 = require("lucide-react");
var import_radix_ui5 = require("radix-ui");
var import_jsx_runtime7 = require("react/jsx-runtime");
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_radix_ui5.RadioGroup.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_radix_ui5.RadioGroup.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_radix_ui5.RadioGroup.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react3.CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}

// src/components/ui/slider.tsx
var React = __toESM(require("react"));
var import_radix_ui6 = require("radix-ui");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_radix_ui6.Slider.Root,
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_radix_ui6.Slider.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              import_radix_ui6.Slider.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_radix_ui6.Slider.Thumb,
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
var import_radix_ui7 = require("radix-ui");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_radix_ui7.Popover.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_radix_ui7.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_radix_ui7.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_radix_ui7.Popover.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_radix_ui7.Popover.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-1 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react5 = require("lucide-react");

// src/components/ui/dialog.tsx
var import_lucide_react4 = require("lucide-react");
var import_radix_ui9 = require("radix-ui");

// src/components/ui/button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_radix_ui8 = require("radix-ui");
var import_jsx_runtime10 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
  const Comp = asChild ? import_radix_ui8.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_radix_ui9.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_radix_ui9.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_radix_ui9.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_radix_ui9.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_radix_ui9.Dialog.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_radix_ui9.Dialog.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_radix_ui9.Dialog.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.XIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
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
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_radix_ui9.Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_radix_ui9.Dialog.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_radix_ui9.Dialog.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_cmdk.Command.Input,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command.List,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command.Empty,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command.Group,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_cmdk.Command.Item,
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var React2 = __toESM(require("react"));
var import_lucide_react6 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react_day_picker.DayPicker,
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
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_lucide_react6.ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { ...props2, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
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
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  const ref = React2.useRef(null);
  React2.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
var React3 = __toESM(require("react"));
var import_radix_ui10 = require("radix-ui");
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React3.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React3.useContext(FormFieldContext);
  const itemContext = React3.useContext(FormItemContext);
  const { getFieldState } = (0, import_react_hook_form.useFormContext)();
  const formState = (0, import_react_hook_form.useFormState)({ name: fieldContext.name });
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_radix_ui10.Slot.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_react_hook_form2 = require("react-hook-form");
var import_jsx_runtime15 = require("react/jsx-runtime");
function FieldWrapper({
  name,
  label,
  description,
  required,
  disabled,
  className,
  children
}) {
  const { control } = (0, import_react_hook_form2.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    FormField,
    {
      control,
      name,
      disabled,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FormItem, { className, children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FormLabel, { children: [
          label,
          required && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormControl, { children: children(field) }),
        description && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormDescription, { children: description }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormMessage, {})
      ] })
    }
  );
}

// src/components/form/zod-form.tsx
var import_react_hook_form3 = require("react-hook-form");
var import_zod = require("@hookform/resolvers/zod");
var import_jsx_runtime16 = require("react/jsx-runtime");
function ZodForm({
  schema,
  onSubmit,
  defaultValues,
  children,
  className
}) {
  const form = (0, import_react_hook_form3.useForm)({
    resolver: (0, import_zod.zodResolver)(schema),
    defaultValues
  });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_hook_form3.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: cn("space-y-6", className),
      children
    }
  ) });
}

// src/components/form/auto-form.tsx
var import_zod2 = require("zod");

// src/components/form/fields/text-field.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function TextField({
  type = "text",
  placeholder,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
function NumberField({
  placeholder,
  min,
  max,
  step,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_jsx_runtime19 = require("react/jsx-runtime");
function CheckboxField(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_jsx_runtime20 = require("react/jsx-runtime");
function SelectField({
  placeholder,
  options,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    Select,
    {
      value: field.value ?? "",
      onValueChange: field.onChange,
      disabled: field.disabled,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectValue, { placeholder }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectContent, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectItem, { value: option.value, children: option.label }, option.value)) })
      ]
    }
  ) });
}

// src/components/form/fields/date-field.tsx
var React4 = __toESM(require("react"));
var import_date_fns = require("date-fns");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function DateField({
  placeholder = "Pick a date",
  ...props
}) {
  const [open, setOpen] = React4.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FieldWrapper, { ...props, children: (field) => {
    const date = field.value instanceof Date ? field.value : field.value ? new Date(field.value) : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        Button,
        {
          variant: "outline",
          className: cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          ),
          disabled: field.disabled,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react7.CalendarIcon, { className: "mr-2 h-4 w-4" }),
            date ? (0, import_date_fns.format)(date, "PPP") : placeholder
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
function TextareaField({
  placeholder,
  rows,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_jsx_runtime23 = require("react/jsx-runtime");
function SwitchField(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_jsx_runtime24 = require("react/jsx-runtime");
function toTitleCase(str) {
  return str.replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/^\w/, (c) => c.toUpperCase()).trim();
}
function unwrapZodType(schema) {
  let current = schema;
  let isOptional = false;
  while (true) {
    if (current instanceof import_zod2.z.ZodOptional || current instanceof import_zod2.z.ZodNullable) {
      isOptional = true;
      current = current._def.innerType;
    } else if (current instanceof import_zod2.z.ZodDefault) {
      current = current._def.innerType;
    } else if (current instanceof import_zod2.z.ZodPipe) {
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
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  if (inner instanceof import_zod2.z.ZodString) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  if (inner instanceof import_zod2.z.ZodNumber) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  if (inner instanceof import_zod2.z.ZodBoolean) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  if (inner instanceof import_zod2.z.ZodEnum) {
    const entries = inner._def.entries;
    const values = Object.values(entries);
    const options = config?.options ?? values.map((v) => ({ label: toTitleCase(v), value: v }));
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  if (inner instanceof import_zod2.z.ZodDate) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(ZodForm, { schema, ...formProps, children: [
    Object.entries(shape).map(
      ([name, fieldSchema]) => inferField(
        name,
        fieldSchema,
        fieldConfig?.[name]
      )
    ),
    children ?? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { type: "submit", children: submitLabel })
  ] });
}

// src/components/form/fields/radio-group-field.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function RadioGroupField({
  options,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    RadioGroup,
    {
      value: field.value ?? "",
      onValueChange: field.onChange,
      disabled: field.disabled,
      children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(RadioGroupItem, { value: option.value, id: `${field.name}-${option.value}` }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Label, { htmlFor: `${field.name}-${option.value}`, children: option.label })
      ] }, option.value))
    }
  ) });
}

// src/components/form/fields/slider-field.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function SliderField({
  min = 0,
  max = 100,
  step = 1,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(FieldWrapper, { ...props, children: (field) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var React5 = __toESM(require("react"));
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function ComboboxField({
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  options,
  ...props
}) {
  const [open, setOpen] = React5.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(FieldWrapper, { ...props, children: (field) => {
    const selectedLabel = options.find(
      (opt) => opt.value === field.value
    )?.label;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react8.ChevronsUpDownIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PopoverContent, { className: "w-(--radix-popover-trigger-width) p-0", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Command, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CommandInput, { placeholder: searchPlaceholder }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CommandEmpty, { children: emptyMessage }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CommandGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  import_lucide_react8.CheckIcon,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
