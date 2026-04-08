"use client";

import ProfileCard from "@/components/ProfileCard";

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
    </section>
  );
}
