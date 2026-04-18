"use client";

import { ThemeToggle } from "@/components/darkMode";
import Orb from "@/components/Orb";
import { Typewriter } from "nextjs-simple-typewriter";

export function Hero() {
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="inicio"
      className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden"
    >
      <Orb
        hoverIntensity={1.0}
        rotateOnHover
        hue={0}
        forceHoverState={false}
        backgroundColor="#000000"
        aria-hidden="true"
      />

      <div className="w-full h-screen flex flex-col items-center absolute ">
        <header className="flex justify-center items-center fixed top-3 w-full z-10 md:justify-normal md:pl-8 md:gap-10">
          <span className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent hidden md:flex">
            Portfólio
          </span>
          <nav
            aria-label="Navegação principal"
            className="flex gap-1 p-0.5 border border-border rounded-full bg-secondary backdrop-blur md:gap-0.5"
          >
            <a href="#inicio" className="nav-item focus-ring" tabIndex={0}>
              Início
            </a>
            <a href="#sobre" className="nav-item focus-ring">
              Sobre
            </a>
            <a href="#projetos" className="nav-item focus-ring">
              Projetos
            </a>
            <a
              href="#contato"
              className="nav-item bg-primary text-primary-foreground rounded-full focus-ring"
            >
              Contato
            </a>
          </nav>
        </header>

        <div className="flex flex-col justify-center h-full w-[90%] ">
          <div className="flex flex-col w-[70%] self-center items-start mb-3 z-5 md:w-[46%]">
            <ThemeToggle />
          </div>

          <div className="flex flex-col items-center mb-5 z-5 md:mb-8">
            <p className="text-primary font-bold w-[70%] md:text-2xl md:w-[46%]">
              Olá, eu sou o
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">Luan Gomes.</h1>
            <div
              aria-live="polite"
              className="h-4.25 w-[70%] md:w-[46%] md:text-[1.3rem]"
            >
              <Typewriter
                words={[
                  "Desenvolvedor Front-end",
                  "Desenvolvedor Back-end",
                  "Desenvolvedor Full-stack",
                ]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={80}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 z-5">
            <button
              aria-label="Baixar currículo"
              className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl z-5 cursor-pointer focus-ring md:px-6 md:text-[1.2rem]"
              onClick={openResume}
            >
              Currículo
            </button>
            <a
              aria-label="Ir para a seção sobre mim"
              href="#sobre"
              className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl z-5 cursor-pointer focus-ring md:px-6 md:text-[1.2rem]"
            >
              Sobre mim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
