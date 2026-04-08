"use client";

import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import Code from "@/assets/icons/code-front.svg";
import UiUx from "@/assets/icons/user-ui-ux.svg";
import Backend from "@/assets/icons/backend.svg";

export function About() {
  return (
    <section id="sobre" className="flex flex-col items-center gap-10">
      <div>
        <ProfileCard
          name="Luan Gomes"
          title="Desenvolvedor"
          avatarUrl="/avatar.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="hsla(218, 100%, 70%, 0.6)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,hsla(278, 40%, 45%, 0.6) 100%,hsla(226, 60%, 70%, 0.27) 100%)"
        />
      </div>
      <div className="w-[85%] flex flex-col text-center gap-2">
        <h2 className="text-primary text-[1.4rem] font-bold">Sobre mim</h2>
        <p className="opacity-90">
          Desenvolvedor Front-End com proficiência em HTML, CSS, JavaScript,
          TypeScript e Node, e experiência com frameworks modernos como React,
          Next.js e Nest.js. Especialista em responsividade, e otimização de
          desempenho web. Busco uma oportunidade em uma empresa inovadora para
          aplicar minha experiência técnica e contribuir para projetos de ponta
          como front-end ou back-end.
        </p>
      </div>

      <div className="w-full h-full space-y-6">
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={Code}
              width={25}
              height={25}
              alt="Frontend"
              aria-hidden="true"
              className=""
            />{" "}
            <span className="font-bold">Frontend</span>
          </div>
          <div>React, Next.js, TypeScript, TailwindCSS</div>
        </div>
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={UiUx}
              width={25}
              height={25}
              alt="UI/UX"
              aria-hidden="true"
            />
            <span className="font-bold">UI/UX</span>
          </div>
          <div>Design Responsivo, Acessibilidade, SEO, Animações</div>
        </div>
        <div className="card-about">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src={Backend}
              width={25}
              height={25}
              alt="Backend"
              aria-hidden="true"
            />
            <span className="font-bold">Backend</span>
          </div>
          <div>Node.js, Nest.js, Express, MongoDB, PostgreSQL</div>
        </div>
      </div>
    </section>
  );
}
