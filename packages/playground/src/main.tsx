import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { z } from "zod";
import {
  ZodForm,
  AutoForm,
  TextField,
  NumberField,
  SelectField,
  TextareaField,
  CheckboxField,
  SwitchField,
  RadioGroupField,
  SliderField,
  DateField,
  ComboboxField,
  Button,
} from "@szd/ui";

const manualSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(0).max(120),
  email: z.string().email("Invalid email"),
  role: z.enum(["admin", "user", "guest"]),
  bio: z.string().optional(),
  newsletter: z.boolean(),
  darkMode: z.boolean(),
  priority: z.enum(["low", "medium", "high"]),
  satisfaction: z.number().min(0).max(100),
  birthday: z.date().optional(),
  framework: z.string(),
});

const autoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  age: z.number().min(18),
  role: z.enum(["developer", "designer", "manager"]),
  active: z.boolean(),
});

const frameworkOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

function ManualFormDemo() {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Manual Form (ZodForm)</h2>
      <ZodForm
        schema={manualSchema}
        defaultValues={{
          name: "",
          age: 25,
          email: "",
          role: undefined as unknown as "admin" | "user" | "guest",
          bio: "",
          newsletter: false,
          darkMode: false,
          priority: undefined as unknown as "low" | "medium" | "high",
          satisfaction: 50,
          birthday: undefined,
          framework: "",
        }}
        onSubmit={(data) => {
          console.log("Manual form submitted:", data);
          alert(JSON.stringify(data, null, 2));
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField name="name" label="Name" placeholder="John Doe" required />
          <NumberField name="age" label="Age" min={0} max={120} required />
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
          <SelectField
            name="role"
            label="Role"
            placeholder="Select a role"
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            required
          />
          <div className="md:col-span-2">
            <TextareaField
              name="bio"
              label="Bio"
              placeholder="Tell us about yourself..."
              description="Optional short biography"
            />
          </div>
          <CheckboxField
            name="newsletter"
            label="Subscribe to newsletter"
            description="We'll send you updates"
          />
          <SwitchField name="darkMode" label="Dark mode" />
          <RadioGroupField
            name="priority"
            label="Priority"
            options={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
            required
          />
          <SliderField
            name="satisfaction"
            label="Satisfaction"
            min={0}
            max={100}
            step={5}
            description="Rate your satisfaction (0-100)"
          />
          <DateField name="birthday" label="Birthday" />
          <ComboboxField
            name="framework"
            label="Favorite Framework"
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            options={frameworkOptions}
            required
          />
        </div>
        <Button type="submit" className="mt-4">
          Submit Manual Form
        </Button>
      </ZodForm>
    </div>
  );
}

function AutoFormDemo() {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Auto Form (AutoForm)</h2>
      <p className="text-muted-foreground text-sm mb-4">
        Generated automatically from a zod schema — no field components needed.
      </p>
      <AutoForm
        schema={autoSchema}
        defaultValues={{
          firstName: "",
          lastName: "",
          email: "",
          age: undefined as unknown as number,
          role: undefined as unknown as "developer" | "designer" | "manager",
          active: false,
        }}
        fieldConfig={{
          email: { placeholder: "you@example.com" },
          age: { description: "Must be 18 or older" },
          active: { fieldType: "switch", label: "Active status" },
        }}
        submitLabel="Submit Auto Form"
        onSubmit={(data) => {
          console.log("Auto form submitted:", data);
          alert(JSON.stringify(data, null, 2));
        }}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">shadcn-zod-bridge Playground</h1>
        <p className="text-muted-foreground mt-1">
          Declarative forms powered by zod schemas and shadcn/ui components
        </p>
      </div>
      <ManualFormDemo />
      <AutoFormDemo />
    </div>
  </React.StrictMode>
);
