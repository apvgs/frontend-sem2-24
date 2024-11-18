import z from 'zod'

const envSchema = z.object({
  JWT_SECRET: z.string(),
  BACKEND_URL: z.string().url(),
})

const envVars = {
  JWT_SECRET: process.env.JWT_SECRET,
  BACKEND_URL: process.env.BACKEND_URL,
}

export const clientEnv = envSchema.parse(envVars)
