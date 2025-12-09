import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z
      .email({ message: "Desculpe, formato do email inválido" })
      .min(1, { message: "Email é obrigatório" }),
    message: z
      .string()
      .min(1, { message: "Mensagem é obrigatória" })
      .max(500, { message: "Sua mensagem deve conter até 500 caracteres" }),
    access_key: z.string(),
    botcheck: z.boolean().optional(),
  })
  .required();

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
