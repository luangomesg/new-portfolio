export function Header() {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10 ">
      <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent sm: hidden">
        Portfólio
      </h1>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a className="nav-item"> Inicio</a>
        <a className="nav-item"> Projetos</a>
        <a className="nav-item"> Sobre</a>
        <a className="nav-item bg-primary text-accent-foreground rounded-full">
          {" "}
          Contato
        </a>
      </nav>
    </header>
  );
}
