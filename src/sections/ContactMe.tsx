export function ContactMe() {
  return (
    <section
      id="contato"
      className="flex flex-col text-center w-[90%] h-full bg-accent border-2 border-border justify-self-center rounded-3xl py-5 px-5"
    >
      <div>
        <h2 className="text-2xl font-bold text-accent-foreground">
          Vamos conversar!
        </h2>
        <p className="text-[0.8rem] text-accent-foreground/90 mt-2">
          Estou sempre aberto para novas oportunidades e colaborações. Vamos
          criar algo incrível juntos!
        </p>
      </div>

      <button className="bg-primary px-5 py-3 mt-3 rounded-2xl mx-auto font-bold border border-border">
        Entrar em contato
      </button>
    </section>
  );
}
