import { ThemeToggle } from "@/components/darkMode";

export function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <header className="flex justify-center items-center fixed top-3 w-full z-10 ">
        <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent sm: hidden">
          Portfólio
        </h1>
        <nav className="flex gap-1 p-0.5 border border-border rounded-full bg-secondary backdrop-blur">
          <a className="nav-item"> Inicio</a>
          <a className="nav-item"> Projetos</a>
          <a className="nav-item"> Sobre</a>
          <a className="nav-item bg-primary text-accent-foreground rounded-full">
            Contato
          </a>
        </nav>
      </header>

      <main className="flex flex-col justify-center h-full w-[90%] ">
        <div className="flex flex-col w-[70%] self-center items-start mb-3">
          <ThemeToggle />
        </div>

        <section className="flex flex-col items-center mb-5">
          <p className="text-primary font-bold w-[70%]">Olá, eu sou o</p>
          <h2 className="text-4xl font-bold">Luan Gomes.</h2>
          <span className="w-[70%]">Desenvolvedor Front-end</span>
        </section>

        <section className="flex justify-center gap-3">
          <button className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl">
            Curriculum
          </button>
          <button className="bg-accent text-accent-foreground px-3 py-2 rounded-2xl">
            Sobre mim
          </button>
        </section>
      </main>
    </div>
  );
}
