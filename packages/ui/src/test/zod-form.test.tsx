import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { z } from "zod";
import { ZodForm } from "../components/form/zod-form";
import { TextField } from "../components/form/fields/text-field";
import { NumberField } from "../components/form/fields/number-field";
import { CheckboxField } from "../components/form/fields/checkbox-field";
import { TextareaField } from "../components/form/fields/textarea-field";
import { Button } from "../components/ui/button";

describe("ZodForm", () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
  });

  it("renders children", () => {
    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email" />
        <Button type="submit">Submit</Button>
      </ZodForm>
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("calls onSubmit with valid data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <ZodForm
        schema={schema}
        onSubmit={onSubmit}
        defaultValues={{ name: "", email: "" }}
      >
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email" />
        <Button type="submit">Submit</Button>
      </ZodForm>
    );

    await user.type(screen.getByRole("textbox", { name: "Name" }), "John");
    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "john@example.com"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { name: "John", email: "john@example.com" },
        expect.anything()
      );
    });
  });

  it("shows validation errors", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <ZodForm
        schema={schema}
        onSubmit={onSubmit}
        defaultValues={{ name: "", email: "" }}
      >
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email" />
        <Button type="submit">Submit</Button>
      </ZodForm>
    );

    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
    expect(onSubmit).not.toHaveBeenCalled();
  });
});

describe("TextField", () => {
  it("renders with label", () => {
    const schema = z.object({ name: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <TextField name="name" label="Full Name" placeholder="Enter name" />
      </ZodForm>
    );

    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("shows required indicator", () => {
    const schema = z.object({ name: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <TextField name="name" label="Name" required />
      </ZodForm>
    );

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("shows description", () => {
    const schema = z.object({ name: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <TextField name="name" label="Name" description="Enter your name" />
      </ZodForm>
    );

    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });
});

describe("NumberField", () => {
  it("converts input to number", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const schema = z.object({ age: z.number() });

    render(
      <ZodForm schema={schema} onSubmit={onSubmit} defaultValues={{ age: undefined as unknown as number }}>
        <NumberField name="age" label="Age" />
        <Button type="submit">Submit</Button>
      </ZodForm>
    );

    await user.type(screen.getByRole("spinbutton", { name: "Age" }), "25");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { age: 25 },
        expect.anything()
      );
    });
  });
});

describe("CheckboxField", () => {
  it("renders with label", () => {
    const schema = z.object({ agree: z.boolean() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ agree: false }}>
        <CheckboxField name="agree" label="I agree" />
      </ZodForm>
    );

    expect(screen.getByText("I agree")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles value on click", async () => {
    const user = userEvent.setup();
    const schema = z.object({ agree: z.boolean() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}} defaultValues={{ agree: false }}>
        <CheckboxField name="agree" label="I agree" />
      </ZodForm>
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-state", "unchecked");

    await user.click(checkbox);

    expect(checkbox).toHaveAttribute("data-state", "checked");
  });
});

describe("TextareaField", () => {
  it("renders with label and placeholder", () => {
    const schema = z.object({ bio: z.string() });

    render(
      <ZodForm schema={schema} onSubmit={() => {}}>
        <TextareaField name="bio" label="Bio" placeholder="Tell us about yourself" />
      </ZodForm>
    );

    expect(screen.getByText("Bio")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tell us about yourself")).toBeInTheDocument();
  });
});
