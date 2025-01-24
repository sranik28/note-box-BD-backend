import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    email: z
      .string()
      .nonempty('Email is required')
      .email('Invalid email format'),
    password: z.string().nonempty('Password is required'),
    role: z.enum(['admin', 'user']).default('user'),
    isBlocked: z.boolean().optional().default(false),
  }),
});

export const UserValidation = { userValidationSchema };
