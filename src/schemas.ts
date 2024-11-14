import { z } from 'zod'
export const loginDataSchema = z.object({
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
})

export type LoginDataInput = z.infer<typeof loginDataSchema>
