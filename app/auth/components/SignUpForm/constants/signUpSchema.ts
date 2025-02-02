import * as z from 'zod';

export const signUpSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'email must not be empty.' })
    .email({ message: 'invalid email address' }),
  password: z.string().min(8, { message: 'password must be at least 8 characters long' }),
  passwordConfirmation: z.string(),
  name: z.string().nonempty({ message: 'name must not be empty.' }),
});
