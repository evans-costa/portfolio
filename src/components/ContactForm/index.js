"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/contactFormSchema";

import toast, { Toaster } from "react-hot-toast";

import Spin from "@/components/Icons/spinIcon";

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
      <Toaster position="top-center" />
      <input
        autoComplete="off"
        type="hidden"
        value="a3c3048e-029a-49c3-805b-312915a41e36"
        {...register("access_key")}></input>
      <input
        autoComplete="off"
        type="checkbox"
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
          aria-label="Nome"
          id="name"
          placeholder="NOME"
          autoComplete="name"
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
          aria-label="Email"
          placeholder="EMAIL"
          autoComplete="email"
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
          id="message"
          aria-label="Mensagem"
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
        aria-label="Enviar mensagem"
        disabled={isSubmitting}
        className={`self-end uppercase cursor-pointer w-fit text-white font-bold tracking-[2.3px] text-base
        ${isSubmitting ? "pointer-events-none" : "pointer-events-auto"}`}>
        {isSubmitting ? (
          <div className="flex justify-center items-center gap-2">
            <span className="animate-spin">
              <Spin />
            </span>{" "}
            Enviando...
          </div>
        ) : (
          <span className="pb-3 link-underline">Enviar mensagem</span>
        )}
      </button>
    </form>
  );
}
