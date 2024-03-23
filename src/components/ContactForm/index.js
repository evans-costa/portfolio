"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import toast, { Toaster } from "react-hot-toast";
import Spin from "@/components/Icons/spin-icon";

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
    access_key: z.string(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data, e) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const responseBody = await response.json();

      if (responseBody.success) {
        toast("Mensagem enviada com sucesso", {
          duration: 4000,
          icon: "✅",
          style: {
            background: "rgb(134 239 172)",
            color: "rgb(21 21 21)",
            border: "1px solid rgb(21 21 21)",
            padding: "8px",
          },
        });
        e.target.reset();
        reset();
      } else {
        console.log(responseBody.message);
      }
    } catch (error) {
      toast("Erro ao enviar a mensagem", {
        duration: 4000,
        icon: "❌",
        style: {
          background: "rgb(255 111 91)",
          color: "rgb(21 21 21)",
          border: "1px solid rgb(21 21 21)",
          padding: "8px",
        },
      });
    }
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full xl:w-1/2 flex flex-col gap-8">
      <Toaster position="top-right" />
      <input
        type="hidden"
        value="a3c3048e-029a-49c3-805b-312915a41e36"
        {...register("access_key")}
      />
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}></input>
      <div className="bg-[#242424] flex flex-col">
        <label htmlFor="name" className="sr-only">
          Nome
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="NOME"
          className={`bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input text-white placeholder:text-gray text-base -tracking-[0.22px] 
            ${errors.name ? "border-red" : "focus:border-green"}`}></input>
        {errors.name && (
          <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">{errors.name?.message}</p>
        )}
      </div>
      <div className="bg-[#242424] flex flex-col">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          {...register("email")}
          type="text"
          id="email"
          placeholder="EMAIL"
          className={`bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input text-white placeholder:text-gray text-base -tracking-[0.22px] 
          ${errors.email ? "border-red" : "focus:border-green"}`}></input>
        {errors.email && (
          <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">
            {errors.email?.message}
          </p>
        )}
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
          className={`bg-[#242424] w-full min-h-[110px] pl-6 pb-4 outline-none border-b border-gray text-input text-white placeholder:text-gray text-base -tracking-[0.22px] resize-none 
          ${errors.message ? "border-red" : "focus:border-green"}`}></textarea>
        {errors.message && (
          <p className="self-end p-1 text-xs -tracking=[0.17px] text-red">
            {errors.message?.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`self-end uppercase cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] text-base
        ${isSubmitting ? "pointer-events-none" : "link link-underline"}`}>
        {isSubmitting ? (
          <div className="flex justify-center items-center gap-2">
            <span className="animate-spin">
              <Spin />
            </span>{" "}
            <span>Enviando...</span>
          </div>
        ) : (
          "Enviar mensagem"
        )}
      </button>
    </form>
  );
}
