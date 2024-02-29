import { z } from 'zod'
export const passwordSchema = z.object({
  password: z.string().min(3).max(20),
})

export const nikNameSchema = z.object({
  name: z.string().min(3).max(15),
})

export const newDeckSchema = z.object({
  cover: z.instanceof(File).optional(),
  isPrivate: z.boolean().optional(),
  name: z.string().max(1000).min(5),
})
