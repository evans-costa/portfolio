"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z
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
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-8">
      <div className="bg-[#242424] flex flex-col">
        <label htmlFor="name" className="sr-only">
          Nome
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="NOME"
          className={`bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] 
            ${errors?.name ? "border-red" : "focus:border-green"}`}></input>
        <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">
          {errors?.name?.message}
        </p>
      </div>
      <div className="bg-[#242424] flex flex-col">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="EMAIL"
          className={`bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] 
          ${errors?.email ? "border-red" : "focus:border-green"}`}></input>
        <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">
          {errors?.email?.message}
        </p>
      </div>
      <div className="bg-[#242424] flex flex-col">
        <label htmlFor="message" className="sr-only">
          Mensagem
        </label>
        <textarea
          {...register("message")}
          type="text"
          id="message"
          placeholder="MENSAGEM"
          className={`bg-[#242424] w-full min-h-[110px] pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] resize-none 
          ${errors?.message ? "border-red" : "focus:border-green"}`}></textarea>
        <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">
          {errors?.message?.message}
        </p>
      </div>
      <input
        type="submit"
        value="ENVIAR MENSAGEM"
        className="self-end cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"></input>
    </form>
  );
}
