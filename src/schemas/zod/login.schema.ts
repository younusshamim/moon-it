import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
});
