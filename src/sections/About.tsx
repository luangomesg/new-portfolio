"use client";

import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import Code from "@/assets/icons/code-front.svg";
import UiUx from "@/assets/icons/user-ui-ux.svg";
import Backend from "@/assets/icons/backend.svg";

export function About() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center gap-10 lg:grid lg:grid-rows-[auto_1fr_auto]"
    >
      <div className="flex flex-col w-full bg-bg-card items-center gap-10 lg:flex-row lg:row-start-1 lg:justify-self-center lg:p-10 lg:max-w-4xl lg:rounded-2xl lg:border-2 lg:border-border">
        <div className="lg:flex lg:w-[40%] lg:justify-end">
          <ProfileCard
            name="Luan Gomes"
            title="Desenvolvedor"
            avatarUrl="/avatar.png"
            iconUrl="/"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="hsla(218, 100%, 70%, 0.6)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,hsla(278, 40%, 45%, 0.6) 100%,hsla(226, 60%, 70%, 0.27) 100%)"
          />
        </div>
        <div className="w-[85%] flex flex-col text-center gap-2 lg:items-start lg:w-[50%] lg:text-start ">
          <h2 className="text-primary text-[1.4rem] font-bold md:text-3xl">
            Sobre mim
          </h2>
          <p className="opacity-90 md:text-[1.2rem] lg:max-w-150">
            Desenvolvedor Front-End com proficiência em HTML, CSS, JavaScript,
            TypeScript e Node, e experiência com frameworks modernos como React,
            Next.js e Nest.js. Especialista em responsividade, e otimização de
            desempenho web. Busco uma oportunidade em uma empresa inovadora para
            aplicar minha experiência técnica e contribuir para projetos de
            ponta como front-end ou back-end.
          </p>
        </div>
      </div>

      <div className="w-full h-full space-y-6 lg:grid lg:grid-cols-3 lg:max-w-4xl lg:gap-5 lg:row-start-2 lg:justify-self-center lg:max-h-35 lg:mt-10">
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={Code}
              width={25}
              height={25}
              alt="Frontend"
              aria-hidden="true"
              className="md:w-7.5"
            />
            <span className="font-bold md:text-[1.3rem] lg:text-[1rem]">
              Frontend
            </span>
          </div>
          <div className="md:text-[1.2rem] lg:text-[0.875rem]">
            React, Next.js, TypeScript, TailwindCSS
          </div>
        </div>
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={UiUx}
              width={20}
              height={20}
              alt="UI/UX"
              aria-hidden="true"
              className="md:w-7.5"
            />
            <span className="font-bold md:text-[1.3rem] lg:text-[0.875rem] ">
              UI/UX
            </span>
          </div>
          <div className="md:text-[1.2rem] lg:text-[0.875rem]">
            Design Responsivo, Acessibilidade, SEO, Animações
          </div>
        </div>
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={Backend}
              width={25}
              height={25}
              alt="Backend"
              aria-hidden="true"
              className="md:w-7.5"
            />
            <span className="font-bold md:text-[1.3rem] lg:text-[1rem]">
              Backend
            </span>
          </div>
          <div className="md:text-[1.2rem] lg:text-[1rem]">
            Node.js, Nest.js, Express, MongoDB, PostgreSQL
          </div>
        </div>
      </div>
    </section>
  );
}
