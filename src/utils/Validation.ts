import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
  rememberMe: z.boolean(),
})

export const signUpSchema = z.object({
  confirmPassword: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(3).max(20),
})

export const emailSchema = z.object({
  email: z.string().email(),
})
export const passwordSchema = z.object({
  password: z.string().min(3).max(20),
})
