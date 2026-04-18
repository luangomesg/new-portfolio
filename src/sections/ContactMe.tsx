"use client";

import { ContactForm } from "@/components/contactForm";
import { useState } from "react";

export function ContactMe() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setVisible(true);
    }, 10);
  };

  const handleClose = () => {
    setClosing(true);
    setVisible(false);

    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };
  return (
    <section
      id="contato"
      className="flex flex-col text-center w-[90%] h-full bg-accent border-2 border-border justify-self-center rounded-3xl py-5 px-5"
    >
      <div>
        <h2 className="text-2xl font-bold text-accent-foreground md:text-[1.7rem]">
          Vamos conversar!
        </h2>
        <p className="text-[0.8rem] text-accent-foreground/90 mt-2 md:text-[1.1rem]">
          Estou sempre aberto para novas oportunidades e colaborações. Vamos
          criar algo incrível juntos!
        </p>
      </div>

      <button
        onClick={handleOpen}
        className="bg-primary text-primary-foreground px-5 py-3 mt-3 rounded-2xl mx-auto font-bold border-2 border-border md:text-[1.2rem]"
      >
        Entrar em contato
      </button>

      {open && (
        <div
          className={`fixed inset-0 flex items-end justify-center z-50 transition-all duration-400 ${
            visible
              ? "opacity-100 bg-black/80 md:bg-transparent"
              : "opacity-0 bg-black/0 md:bg-transparent"
          }`}
          onClick={handleClose}
        >
          <div
            className={`bg-background p-6 border-t border-r border-l border-foreground rounded-t-2xl w-full min-h-[70%] md:w-[80%] md:min-h-[50%] md:border-b md:rounded-b-2xl ${
              closing ? "animate-slide-down" : "animate-slide-up "
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-[1.2rem] mb-10 md:text-3xl">
              Me envie um e-mail
            </h2>
            <ContactForm />

            <button
              onClick={handleClose}
              className="mt-4 text-sm text-foreground focus-ring md:text-[0.94rem]"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
