import { z } from 'zod'
export const passwordSchema = z.object({
  password: z.string().min(3).max(20),
})

export const nikNameSchema = z.object({
  name: z.string().min(3).max(15),
})
