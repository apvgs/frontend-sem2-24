import { z } from 'zod'
export const loginDataSchema = z.object({
  email: z
    .string()
    .email('Formato de email inválido.')
    .max(100, 'O email deve ter no máximo 100 caracteres.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
})

export type LoginDataInput = z.infer<typeof loginDataSchema>

export const signupDataSchema = z
  .object({
    name: z
      .string()
      .min(2, 'O nome deve ter pelo menos 2 caracteres.')
      .max(100, 'O nome deve ter no máximo 100 caracteres.'),
    cpf: z
      .string()
      .length(11, 'O CPF deve ter exatamente 11 caracteres.')
      .regex(/^[0-9]+$/, 'O CPF deve conter apenas números.'),
    email: z
      .string()
      .email('Formato de email inválido.')
      .max(100, 'O email deve ter no máximo 100 caracteres.'),
    password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem.',
        path: ['confirmPassword'],
      })
    }
  })

export type SignUpDataInput = z.infer<typeof signupDataSchema>

export const connectDeviceDataInput = z.object({
  code: z.string().min(8, 'O código deve ter ao menos 8 caracteres.'),
  location: z.string().min(1, 'A localização não pode ser nula.'),
})

export type ConnectDeviceData = z.infer<typeof connectDeviceDataInput>
