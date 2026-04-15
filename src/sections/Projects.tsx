import { ProjectsComponent } from "@/components/Projects";
import LogoLoop from "@/components/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import PlaywrightIcon from "@/assets/icons/playwright.svg";
import Image from "next/image";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNestjs />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiPostgresql width={40} height={40} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com/luangomesg",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <Image src={PlaywrightIcon} alt="Playwright" className="w-17 h-17" />,
    title: "Playwright",
    href: "https://playwright.dev",
  },
];

export const Projects = () => {
  return (
    <section
      id="projetos"
      className="flex flex-col items-center w-full h-full mt-10"
    >
      <ProjectsComponent />

      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="flex flex-col w-full items-center mt-10 gap-10 text-primary"
      >
        <h2 className="text-3xl font-bold text-foreground">Minhas Stacks</h2>
        <LogoLoop
          logos={techLogos}
          speed={30}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={60}
          fadeOut
          fadeOutColor="var(--background)"
          scaleOnHover
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
