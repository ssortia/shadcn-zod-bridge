# shadcn-zod-bridge

Декларативные формы на основе zod-схем и shadcn/ui компонентов. Из zod-схемы + набора полей получается
полнофункциональная форма с валидацией — без ручной обвязки react-hook-form.

## Возможности

- **ZodForm** — обёртка формы: передаёте zod-схему, получаете типизированный `onSubmit`
- **10 Field-компонентов** — TextField, NumberField, SelectField, TextareaField, CheckboxField, SwitchField,
  RadioGroupField, SliderField, DateField, ComboboxField
- **AutoForm** — автогенерация формы из zod-схемы без ручного описания полей
- **Валидация** — автоматическая через zod + react-hook-form
- **shadcn/ui** — все компоненты построены на shadcn/ui примитивах

## Быстрый старт

### Установка

```bash
pnpm install
```

### Запуск playground

```bash
pnpm --filter playground dev
```

### Сборка библиотеки

```bash
pnpm --filter ui build
```

### Запуск тестов

```bash
pnpm --filter ui test:run
```

## Использование

### Декларативный подход (ZodForm)

```tsx
import {z} from "zod";
import {ZodForm, TextField, NumberField, SelectField, Button} from "@szd/ui";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(0).max(120),
  role: z.enum(["admin", "user", "guest"]),
});

<ZodForm schema={schema} onSubmit={(data) => console.log(data)}>
  <TextField name="name" label="Name" required/>
  <NumberField name="age" label="Age"/>
  <SelectField
          name="role"
          label="Role"
          options={[
            {label: "Admin", value: "admin"},
            {label: "User", value: "user"},
            {label: "Guest", value: "guest"},
          ]}
  />
  <Button type="submit">Submit</Button>
</ZodForm>
```

### AutoForm — автогенерация из схемы

```tsx
import {z} from "zod";
import {AutoForm} from "@szd/ui";

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18),
    role: z.enum(["developer", "designer", "manager"]),
    active: z.boolean(),
});

<AutoForm
    schema={schema}
    onSubmit={(data) => console.log(data)}
    fieldConfig={{
        email: {placeholder: "you@example.com"},
        active: {fieldType: "switch", label: "Active status"},
    }}
/>
```

AutoForm автоматически:

- Маппит `z.string()` → TextField, `z.number()` → NumberField, `z.boolean()` → CheckboxField, `z.enum()` → SelectField,
  `z.date()` → DateField
- Генерирует label из имени поля (camelCase → Title Case)
- Определяет required из `.optional()` / `.nullable()`
- Поддерживает `fieldConfig` для кастомизации отдельных полей

## Доступные Field-компоненты

| Компонент       | Zod-тип                   | shadcn-примитив     |
|-----------------|---------------------------|---------------------|
| TextField       | `z.string()`              | Input               |
| NumberField     | `z.number()`              | Input type="number" |
| SelectField     | `z.enum()` / `z.string()` | Select              |
| TextareaField   | `z.string()`              | Textarea            |
| CheckboxField   | `z.boolean()`             | Checkbox            |
| SwitchField     | `z.boolean()`             | Switch              |
| RadioGroupField | `z.enum()`                | RadioGroup          |
| SliderField     | `z.number()`              | Slider              |
| DateField       | `z.date()` / `z.string()` | Calendar + Popover  |
| ComboboxField   | `z.string()`              | Command + Popover   |

## Структура проекта

```
packages/
├── ui/                         # Библиотека компонентов
│   └── src/
│       ├── components/
│       │   ├── ui/             # shadcn примитивы (input, select, checkbox, ...)
│       │   └── form/           # Bridge-компоненты
│       │       ├── zod-form.tsx
│       │       ├── auto-form.tsx
│       │       ├── field-wrapper.tsx
│       │       ├── types.ts
│       │       └── fields/     # TextField, NumberField, ...
│       ├── lib/utils.ts
│       ├── index.ts
│       └── styles.css
└── playground/                 # Демо-страница с примерами форм
    └── src/main.tsx
```

## Технологии

- **React 19** + TypeScript
- **Zod v4** — валидация схем
- **react-hook-form** + **@hookform/resolvers** — управление состоянием формы
- **shadcn/ui** (new-york стиль) — UI примитивы на Radix UI
- **Tailwind CSS v4** — стилизация
- **tsup** — сборка (ESM + CJS)
- **Vitest** + React Testing Library — тестирование
- **pnpm workspaces** — монорепозиторий