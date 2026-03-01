import * as React from "react";
import { useForm, FormProvider, type DefaultValues, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z, ZodType } from "zod";
import { cn } from "@/lib/utils";

export interface ZodFormProps<T extends ZodType<FieldValues>> {
  schema: T;
  onSubmit: (data: z.infer<T>) => void;
  defaultValues?: DefaultValues<z.infer<T>>;
  children: React.ReactNode;
  className?: string;
}

export function ZodForm<T extends ZodType<FieldValues>>({
  schema,
  onSubmit,
  defaultValues,
  children,
  className,
}: ZodFormProps<T>) {
  // zodResolver has a type incompatibility with zod v4 generics in @hookform/resolvers.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
