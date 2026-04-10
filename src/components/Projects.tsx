import Image from "next/image";
import yourForum from "@/assets/images/yourforum.png";
import devBills from "@/assets/images/devbills.png";
import playStation from "@/assets/images/playstation.png";

const portfolioProjects = [
  {
    title: "Forum Frontend",
    description:
      "Uma aplicação fullstack de fórum desenvolvida com foco em autenticação segura, arquitetura moderna e boas práticas de produção.",

    link: "https://forum-frontend-pi.vercel.app",
    image: yourForum,
  },
  {
    title: "DevBill$",
    description:
      "DevBill$ é uma ferramenta que oferece eficiência e praticidade no controle e organização das finanças pessoais.",
    link: "https://dev-bill-frontend.vercel.app",
    image: devBills,
  },
  {
    title: "Playstation Store",
    description:
      "Uma pagina da playstation store feita com algumas animações e interações.",
    link: "https://luangomesg.github.io/Playstation-Store/",
    image: playStation,
  },
];

export const ProjectsComponent = () => {
  return (
    <div className="container w-[90%]">
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Principais Projetos
      </h2>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-card rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-5 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-border mt-4 md:mt-5" />
                <p className="text-secondary-foreground/90 mt-4 md:mt-5">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-primary text-primary-foreground focus-ring h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 "
                >
                  <span>Visitar Site</span>
                  {/* <ArrowUpRightIcon className="size-4" /> */}
                </a>
              </div>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
