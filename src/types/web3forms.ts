import { z } from "zod";

export const web3FormsResponseSchema = z.object({
  statusCode: z.number().optional(),
  success: z.boolean(),
  body: z
    .object({
      data: z.record(z.string(), z.unknown()).optional(),
      message: z.string().optional(),
    })
    .optional(),
  message: z.string().optional(),
});

export type Web3FormsResponse = z.infer<typeof web3FormsResponseSchema>;
