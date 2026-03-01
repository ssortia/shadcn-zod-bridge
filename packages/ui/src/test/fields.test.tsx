import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { z } from "zod";
import { ZodForm } from "../components/form/zod-form";
import { SwitchField } from "../components/form/fields/switch-field";
import { RadioGroupField } from "../components/form/fields/radio-group-field";
import { SliderField } from "../components/form/fields/slider-field";
import { DateField } from "../components/form/fields/date-field";
import { ComboboxField } from "../components/form/fields/combobox-field";

const OPTIONS = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

describe("SwitchField", () => {
  it("renders with label", () => {
    const schema = z.object({ active: z.boolean() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ active: false }}>
        <SwitchField name="active" label="Active" />
      </ZodForm>
    );

    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    const schema = z.object({ active: z.boolean() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ active: false }}>
        <SwitchField name="active" label="Active" />
      </ZodForm>
    );

    const sw = screen.getByRole("switch");
    expect(sw).toHaveAttribute("data-state", "unchecked");

    await user.click(sw);

    expect(sw).toHaveAttribute("data-state", "checked");
  });

  it("sets aria-required when required", () => {
    const schema = z.object({ active: z.boolean() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ active: false }}>
        <SwitchField name="active" label="Active" required />
      </ZodForm>
    );

    expect(screen.getByRole("switch")).toHaveAttribute("aria-required", "true");
  });
});

describe("RadioGroupField", () => {
  it("renders all options", () => {
    const schema = z.object({ choice: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ choice: "" }}>
        <RadioGroupField name="choice" label="Choice" options={OPTIONS} />
      </ZodForm>
    );

    expect(screen.getByText("Choice")).toBeInTheDocument();
    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("selects option on click", async () => {
    const user = userEvent.setup();
    const schema = z.object({ choice: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ choice: "" }}>
        <RadioGroupField name="choice" label="Choice" options={OPTIONS} />
      </ZodForm>
    );

    const radios = screen.getAllByRole("radio");
    await user.click(radios[0]);

    expect(radios[0]).toHaveAttribute("data-state", "checked");
    expect(radios[1]).toHaveAttribute("data-state", "unchecked");
  });

  it("sets aria-required when required", () => {
    const schema = z.object({ choice: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ choice: "" }}>
        <RadioGroupField name="choice" label="Choice" options={OPTIONS} required />
      </ZodForm>
    );

    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-required", "true");
  });
});

describe("SliderField", () => {
  it("renders with label", () => {
    const schema = z.object({ volume: z.number() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ volume: 50 }}>
        <SliderField name="volume" label="Volume" />
      </ZodForm>
    );

    expect(screen.getByText("Volume")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("renders with default value", () => {
    const schema = z.object({ level: z.number() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ level: 30 }}>
        <SliderField name="level" label="Level" min={0} max={100} />
      </ZodForm>
    );

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30");
  });
});

describe("DateField", () => {
  it("renders with placeholder", () => {
    const schema = z.object({ birthday: z.date().optional() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <DateField name="birthday" label="Birthday" placeholder="Pick a date" />
      </ZodForm>
    );

    expect(screen.getByText("Birthday")).toBeInTheDocument();
    expect(screen.getByText("Pick a date")).toBeInTheDocument();
  });

  it("does not crash with invalid date string in defaultValues", () => {
    const schema = z.object({ birthday: z.string().optional() });

    expect(() =>
      render(
        <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ birthday: "not-a-date" }}>
          <DateField name="birthday" label="Birthday" />
        </ZodForm>
      )
    ).not.toThrow();

    // Falls back to placeholder when date is invalid
    expect(screen.getByText("Pick a date")).toBeInTheDocument();
  });

  it("sets aria-required when required", () => {
    const schema = z.object({ birthday: z.date().optional() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <DateField name="birthday" label="Birthday" required />
      </ZodForm>
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-required", "true");
  });
});

describe("ComboboxField", () => {
  it("renders with placeholder", () => {
    const schema = z.object({ fruit: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ fruit: "" }}>
        <ComboboxField name="fruit" label="Fruit" options={OPTIONS} placeholder="Pick a fruit" />
      </ZodForm>
    );

    expect(screen.getByText("Fruit")).toBeInTheDocument();
    expect(screen.getByText("Pick a fruit")).toBeInTheDocument();
  });

  it("opens dropdown on click", async () => {
    const user = userEvent.setup();
    const schema = z.object({ fruit: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ fruit: "" }}>
        <ComboboxField name="fruit" label="Fruit" options={OPTIONS} />
      </ZodForm>
    );

    await user.click(screen.getByRole("combobox"));

    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("sets aria-required when required", () => {
    const schema = z.object({ fruit: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ fruit: "" }}>
        <ComboboxField name="fruit" label="Fruit" options={OPTIONS} required />
      </ZodForm>
    );

    expect(screen.getByRole("combobox")).toHaveAttribute("aria-required", "true");
  });
});
