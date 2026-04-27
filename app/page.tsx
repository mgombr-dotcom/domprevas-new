export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Dom Pre Vás"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div>
            <div className="text-3xl font-bold tracking-wide">DOM PRE VÁS</div>
            <div className="mt-1 text-xs uppercase tracking-[0.35em] text-white/70">
              staviame vaše sny
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase lg:flex">
            <a href="#">Domy</a>
            <a href="#">Projekty</a>
            <a href="#">Služby</a>
            <a href="#">Realizácie</a>
            <a href="#">O nás</a>
            <a href="#">Kontakt</a>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <span className="text-sm font-semibold">+421 911 123 456</span>
            <a
              href="#kontakt"
              className="rounded-sm bg-red-600 px-6 py-4 text-xs font-bold uppercase transition hover:bg-red-700"
            >
              Objednať projekt
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-6">
          <div className="max-w-2xl pb-28">
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Staviame
              <br />
              vaše sny.
              <br />
              <span className="text-red-600">
                Domov pre
                <br />
                vás a vašu rodinu.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-white/90">
              Navrhujeme a staviame kvalitné, energeticky úsporné a nadčasové
              domy na kľúč.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projekty"
                className="inline-flex items-center justify-center rounded-sm bg-red-600 px-8 py-5 text-xs font-bold uppercase tracking-wide transition hover:bg-red-700"
              >
                Pozrieť projekty <span className="ml-4">→</span>
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-sm border border-white/70 px-8 py-5 text-xs font-bold uppercase tracking-wide transition hover:bg-white hover:text-black"
              >
                Konzultácia zdarma <span className="ml-4">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 px-6 md:grid-cols-3 lg:ml-auto lg:mr-24">
            <div className="rounded-md bg-black/55 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 text-4xl">⌂</div>
              <h3 className="text-lg font-bold">Projekty domov</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Vyberte si z našich projektov domov
              </p>
            </div>

            <div className="rounded-md bg-black/55 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 text-4xl">⌁</div>
              <h3 className="text-lg font-bold">Na kľúč</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Postavíme vám dom od základov
              </p>
            </div>

            <div className="rounded-md bg-black/55 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 text-4xl">▭</div>
              <h3 className="text-lg font-bold">Realizácie</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Pozrite si naše dokončené projekty
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}