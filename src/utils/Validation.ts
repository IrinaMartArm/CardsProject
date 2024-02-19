import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email(),
})
export const passwordSchema = z.object({
  password: z.string().min(3).max(20),
})
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().default(false).optional(),
})
