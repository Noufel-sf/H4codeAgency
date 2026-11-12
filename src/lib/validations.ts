import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'nameMin' }),
  email: z.string().email({ message: 'emailInvalid' }),
  company: z.string().optional(),
  service: z.string().min(1, { message: 'serviceRequired' }),
  budget: z.string().optional(),
  message: z.string().min(15, { message: 'messageMin' })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

