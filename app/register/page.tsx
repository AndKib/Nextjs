import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

function RegisterPage() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      admin: false,
    },
  });

  return (
    <Card className="flex justify-center">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register a new user</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="register-name"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Ola nordmann"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-username">Username</FieldLabel>
                  <Input
                    {...field}
                    id="register-username"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Ola123"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-email">email</FieldLabel>
                  <Input
                    {...field}
                    id="register-email"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="email@example.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
             <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-username">Username</FieldLabel>
                  <Input
                    {...field}
                    id="register-username"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Ola123"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
             <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-username">Username</FieldLabel>
                  <Input
                    {...field}
                    id="register-username"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Ola123"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="register-password"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="********"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
               <Controller
              name="admin"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation={"horizontal"} data-invalid={fieldState.invalid}>
                  <Checkbox/>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
import { registerSchema } from "@/lib/schema";
import z from "zod";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default RegisterPage;
