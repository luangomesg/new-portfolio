"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.email("Email inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    reset();
    alert("Email enviado!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="text-start">
        <input
          {...register("name")}
          placeholder="Seu nome"
          autoComplete="off"
          className="border border-foreground/80 px-3 py-1 rounded-[0.7rem] w-full focus-ring placeholder:text-foreground"
        />
        <div className="min-h-5">
          <span className="text-red-500 text-sm pl-2 ">
            {errors.name?.message}
          </span>
        </div>
      </div>

      {/* EMAIL */}
      <div className="text-start">
        <input
          {...register("email")}
          type="email"
          placeholder="Seu email"
          autoComplete="off"
          className="border border-foreground/80 px-3 py-1 rounded-[0.7rem] w-full focus-ring placeholder:text-foreground"
        />
        <div className="min-h-5">
          <span className="text-red-500 text-sm pl-2 ">
            {errors.email?.message}
          </span>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="text-start">
        <textarea
          {...register("message")}
          placeholder="Mensagem..."
          autoComplete="off"
          className="border border-foreground/80 px-3 py-1 rounded-[0.7rem] w-full min-h-30 focus-ring placeholder:text-foreground -mb-2"
        />
        <div className="min-h-5 mb-3">
          <span className="text-red-500 text-sm pl-2">
            {errors.message?.message}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-primary-foreground px-3 py-1 rounded-lg focus-ring disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
