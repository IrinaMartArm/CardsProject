import { z } from 'zod'
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

export const nikNameSchema = z.object({
  nickName: z.string().min(3).max(15),
})
