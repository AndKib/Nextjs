"use client";
import {
  Card,
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "sonner";



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

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    const result = await signUp.email({
      email: data.email,
      username: data.username,
      name: data.name,
      password: data.password,
      role: data.admin ? "ADMIN" : "USER"
    })

    if (result.error){
      toast.error ("Registration failed", {
        description: result.error.message || "Unable to register",
      });
      return;
    }
      toast.success("Registration successful!");
      form.reset() ;
      redirect("/dashboard");
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <Card className="w-full-mt-10 sm:max-w md">
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
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="register-password"
                    aria-invalid={fieldState.invalid}
                    type="password"
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
                  <Checkbox
                  id="register-admin"
                  name={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                    />
                    <FieldLabel htmlFor="register-admin">Admin</FieldLabel> 
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation={"responsive"}>
          <Button type="submit" form="register">
            register
          </Button>
          <Button variant={"ghost"}>
            <Link href="/login">
              Already have an account? 
            </Link>
          </Button>
        </Field>
        </CardFooter>
    </Card>
    </div>
  );
}


export default RegisterPage;
