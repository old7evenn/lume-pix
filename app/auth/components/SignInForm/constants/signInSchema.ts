import * as z from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'email must not be empty.' })
    .email({ message: 'invalid email address' }),
  password: z.string().nonempty({ message: 'password must not be empty.' }),
});
