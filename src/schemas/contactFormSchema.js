import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z
      .string()
      .min(1, { message: "Email é obrigatório" })
      .email({ message: "Desculpe, formato do email inválido" }),
    message: z
      .string()
      .min(1, { message: "Mensagem é obrigatória" })
      .max(500, { message: "Sua mensagem deve conter até 500 caracteres" }),
    access_key: z.string(),
  })
  .required();
