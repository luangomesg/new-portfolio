import { About, ContactMe, Hero, Projects } from "@/sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <footer className="pb-10">
        <ContactMe />
      </footer>
    </>
  );
}
