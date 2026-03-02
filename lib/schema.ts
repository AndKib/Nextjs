import z from "zod";

export const registerSchema = z.object({
  email: z.email("Invalid email address"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(65, "Name must be at most 65 characters long"),
  username: z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(32, "Username must be at most 32 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  admin: z.boolean(),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username cannot be empty"),
  password: z.string().min(1, "Password cannot be empty"),
});
