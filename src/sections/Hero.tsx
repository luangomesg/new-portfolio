import { ThemeToggle } from "@/components/darkMode";
import Orb from "@/components/Orb";
import { Typewriter } from "nextjs-simple-typewriter";

export function Hero() {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <Orb
        hoverIntensity={1.0}
        rotateOnHover
        hue={0}
        forceHoverState={false}
        backgroundColor="#000000"
      />

      <div className="w-full h-screen flex flex-col items-center absolute ">
        <header className="flex justify-center items-center fixed top-3 w-full z-10 ">
          <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent sm: hidden">
            Portfólio
          </h1>
          <nav className="flex gap-1 p-0.5 border border-border rounded-full bg-secondary backdrop-blur ">
            <a className="nav-item"> Inicio</a>
            <a className="nav-item"> Projetos</a>
            <a className="nav-item"> Sobre</a>
            <a className="nav-item bg-primary text-primary-foreground rounded-full">
              Contato
            </a>
          </nav>
        </header>

        <main className="flex flex-col justify-center h-full w-[90%] ">
          <div className="flex flex-col w-[70%] self-center items-start mb-3 z-5">
            <ThemeToggle />
          </div>

          <section className="flex flex-col items-center mb-5">
            <p className="text-primary font-bold w-[70%]">Olá, eu sou o</p>
            <h2 className="text-4xl font-bold">Luan Gomes.</h2>
            <div className="h-4.25 w-[70%]">
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
          </section>

          <section className="flex justify-center gap-3">
            <button className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl z-5">
              Curriculum
            </button>
            <button className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl z-5">
              Sobre mim
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
