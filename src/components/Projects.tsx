import Image from "next/image";
import yourForum from "@/assets/images/yourforum.png";
import devBills from "@/assets/images/devbills.png";
import playStation from "@/assets/images/playstation.png";
import pokedex from "@/assets/images/pokedex.png";
import conversorMoeda from "@/assets/images/moeda.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

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
  {
    title: "Pokedex",
    description:
      "Uma aplicação de pokedex feita com JavaScript. A aplicação possui uma interface simples e intuitiva, permitindo aos usuários pesquisar e visualizar informações sobre cada pokemon.",

    link: "https://luangomesg.github.io/Pokedex/",
    image: pokedex,
  },
  {
    title: "Conversor de Moedas",
    description:
      "Uma aplicação de conversão de moedas. A aplicação permite aos usuários converter valores entre Dolar, Euro e Bitcoin.",

    link: "https://convertingcoin.netlify.app",
    image: conversorMoeda,
  },
];

export const ProjectsComponent = () => {
  return (
    <div className="container w-[90%] lg:mt-10 lg:mb-10">
      <h2 className="font-bold text-3xl md:text-5xl text-center mt-6">
        Principais Projetos
      </h2>
      <div className="flex flex-col mt-10 gap-20 md:mt-20 items-center">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-bg-card border border-border rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-5 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none lg:w-full lg:max-w-4xl"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
              <div className="lg:pb-16">
                <h3 className=" text-2xl mt-2 md:mt-5 md:text-4xl font-bold lg:text-[2rem]">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-border mt-4 md:mt-5" />
                <p className="text-secondary-foreground/90 mt-4 md:mt-5 md:text-[1.3rem] lg:text-[1.1rem]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-primary text-primary-foreground focus-ring h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 md:text-[1.2rem] "
                >
                  <span>Visitar Site</span>
                  <Image src={ArrowUpRightIcon} alt="" aria-hidden="true" />
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
