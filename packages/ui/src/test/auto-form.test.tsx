import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { z } from "zod";
import { AutoForm } from "../components/form/auto-form";

describe("AutoForm", () => {
  it("generates fields from zod schema", () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
      active: z.boolean(),
    });

    render(<AutoForm schema={schema} onSubmit={() => {}} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders submit button with custom label", () => {
    const schema = z.object({ name: z.string() });

    render(
      <AutoForm schema={schema} onSubmit={() => {}} submitLabel="Save" />
    );

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("uses default Submit label", () => {
    const schema = z.object({ name: z.string() });

    render(<AutoForm schema={schema} onSubmit={() => {}} />);

    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("converts camelCase to Title Case labels", () => {
    const schema = z.object({
      firstName: z.string(),
      lastName: z.string(),
    });

    render(<AutoForm schema={schema} onSubmit={() => {}} />);

    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
  });

  it("uses custom labels from fieldConfig", () => {
    const schema = z.object({ name: z.string() });

    render(
      <AutoForm
        schema={schema}
        onSubmit={() => {}}
        fieldConfig={{ name: { label: "Full Name" } }}
      />
    );

    expect(screen.getByText("Full Name")).toBeInTheDocument();
  });

  it("hides fields via fieldConfig", () => {
    const schema = z.object({
      name: z.string(),
      secret: z.string(),
    });

    render(
      <AutoForm
        schema={schema}
        onSubmit={() => {}}
        fieldConfig={{ secret: { hidden: true } }}
      />
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.queryByText("Secret")).not.toBeInTheDocument();
  });

  it("marks optional fields as not required", () => {
    const schema = z.object({
      required: z.string(),
      optional: z.string().optional(),
    });

    render(<AutoForm schema={schema} onSubmit={() => {}} />);

    const requiredStars = screen.getAllByText("*");
    expect(requiredStars).toHaveLength(1);
  });

  it("generates SelectField for enum types", () => {
    const schema = z.object({
      role: z.enum(["admin", "user", "guest"]),
    });

    render(<AutoForm schema={schema} onSubmit={() => {}} />);

    expect(screen.getByText("Role")).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const schema = z.object({
      name: z.string().min(1),
    });

    render(
      <AutoForm
        schema={schema}
        onSubmit={onSubmit}
        defaultValues={{ name: "" }}
      />
    );

    await user.type(screen.getByRole("textbox"), "John");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { name: "John" },
        expect.anything()
      );
    });
  });

  it("renders custom children instead of default submit button", () => {
    const schema = z.object({ name: z.string() });

    render(
      <AutoForm schema={schema} onSubmit={() => {}}>
        <button type="submit">Custom Submit</button>
      </AutoForm>
    );

    expect(
      screen.getByRole("button", { name: "Custom Submit" })
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
  });
});
