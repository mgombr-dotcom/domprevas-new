export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
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
            <a href="#projekty">Projekty</a>
            <a href="#sluzby">Služby</a>
            <a href="#">Realizácie</a>
            <a href="#onas">O nás</a>
            <a href="#kontakt">Kontakt</a>
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
              <p className="mt-3 text-sm text-white/75">
                Vyberte si z našich projektov domov
              </p>
            </div>

            <div className="rounded-md bg-black/55 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 text-4xl">⌁</div>
              <h3 className="text-lg font-bold">Na kľúč</h3>
              <p className="mt-3 text-sm text-white/75">
                Postavíme vám dom od základov
              </p>
            </div>

            <div className="rounded-md bg-black/55 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 text-4xl">▭</div>
              <h3 className="text-lg font-bold">Realizácie</h3>
              <p className="mt-3 text-sm text-white/75">
                Pozrite si naše dokončené projekty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section id="onas" className="bg-white px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-[2fr_0.8fr] gap-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/about-main.jpg"
                alt="Dom Pre Vás"
                className="h-full min-h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                  <div className="text-6xl font-bold">DPV</div>
                  <div className="mt-3 text-2xl">DOM PRE VÁS</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <img
                src="/about-1.jpg"
                alt="Interiér"
                className="h-full rounded-lg object-cover"
              />
              <img
                src="/about-2.jpg"
                alt="Kuchyňa"
                className="h-full rounded-lg object-cover"
              />
              <img
                src="/about-3.jpg"
                alt="Kúpeľňa"
                className="h-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
                O nás
              </p>

              <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Splníme váš sen
                <br />
                o bývaní
              </h2>

              <p className="max-w-xl leading-8 text-neutral-600">
                Už viac ako 16 rokov staviame domy, v ktorých sa ľuďom dobre
                žije. Spájame kvalitné materiály, moderné technológie a poctivú
                prácu. Od návrhu až po odovzdanie kľúčov.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">
                <div className="rounded-lg border p-6">
                  <p className="text-3xl font-bold">16+</p>
                  <p className="text-sm text-neutral-500">rokov</p>
                </div>

                <div className="rounded-lg border p-6">
                  <p className="text-3xl font-bold">30+</p>
                  <p className="text-sm text-neutral-500">tím</p>
                </div>

                <div className="rounded-lg border p-6">
                  <p className="text-3xl font-bold">350+</p>
                  <p className="text-sm text-neutral-500">domov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTY DOMOV */}
      <section id="projekty" className="bg-[#081018] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-600">
                Projekty domov
              </p>
              <h2 className="text-4xl font-extrabold md:text-5xl">
                Vyberte si dom podľa svojich predstáv
              </h2>
            </div>

            <a
              href="#"
              className="hidden border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-wide transition hover:bg-white hover:text-black md:inline-flex"
            >
              Zobraziť všetky projekty <span className="ml-4">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["/project-1.jpg", "Rodinný dom 1", "104 m²"],
              ["/project-2.jpg", "Rodinný dom 2", "108 m²"],
              ["/project-3.jpg", "Rodinný dom 3", "112 m²"],
              ["/project-4.jpg", "Rodinný dom 4", "116 m²"],
              ["/project-5.jpg", "Rodinný dom 5", "120 m²"],
            ].map(([image, title, size]) => (
              <div
                key={title}
                className="overflow-hidden rounded-md bg-white text-black shadow-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{size}</p>

                  <div className="mt-5 flex items-center gap-5 text-sm text-neutral-700">
                    <span>🚗 4</span>
                    <span>🛏 2</span>
                    <span>🛁 1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="relative bg-white text-black">
        <div className="grid min-h-[720px] grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-24 lg:pl-[calc((100vw-1280px)/2+24px)] lg:pr-20">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
              Naše služby
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
              Kompletný servis pre
              <br />
              váš nový domov
            </h2>
          </div>

          <div className="relative min-h-[870px]">
            <img
              src="/services.jpg"
              alt="Interiér domu"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-20 -mt-[500px] lg:-mt-[520px]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid overflow-hidden rounded-md bg-white shadow-2xl md:grid-cols-5">
              {[
                [
                  "⌁",
                  "Návrh a projekcia",
                  "Vytvoríme projekt presne podľa vašich predstáv.",
                ],
                [
                  "▦",
                  "Výstavba na kľúč",
                  "Postavíme váš dom kvalitne, načas a bez starostí.",
                ],
                [
                  "▱",
                  "Interiérové riešenia",
                  "Pomôžeme s výberom materiálov a zariadením.",
                ],
                [
                  "▣",
                  "Stavebný dozor",
                  "Zabezpečíme kontrolu kvality počas celej výstavby.",
                ],
                [
                  "⚒",
                  "Záručný a pozáručný servis",
                  "Sme tu pre vás aj po odovzdaní domu.",
                ],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="border-b border-neutral-200 p-7 md:border-b-0 md:border-r last:border-r-0"
                >
                  <div className="mb-6 text-4xl text-red-600">{icon}</div>
                  <h3 className="mb-4 text-sm font-extrabold">{title}</h3>
                  <p className="text-sm leading-6 text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:pr-0">
            <div className="bg-[#081018] p-10 text-white md:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
                Prečo si vybrať nás
              </p>

              <h3 className="mb-8 text-4xl font-extrabold leading-tight">
                Kvalita, na ktorú sa
                <br />
                môžete spoľahnúť
              </h3>

              <ul className="space-y-4 text-sm text-white/85">
                <li>⭕ Kvalitné overené materiály</li>
                <li>⭕ Moderné technológie a postupy</li>
                <li>⭕ Individuálny prístup ku každému klientovi</li>
                <li>⭕ Transparentné ceny bez skrytých poplatkov</li>
                <li>⭕ Stovky spokojných klientov</li>
              </ul>

              <a
                href="#onas"
                className="mt-10 inline-flex border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-wide transition hover:bg-white hover:text-black"
              >
                Zistiť viac o nás <span className="ml-4">→</span>
              </a>
            </div>

            <div className="flex min-h-[260px] items-center bg-red-600 p-10 text-white md:p-14 lg:w-[calc(100%+((100vw-1280px)/2))] lg:pr-[calc((100vw-1280px)/2+56px)]">
              <div>
                <div className="mb-6 text-6xl">▣</div>
                <h3 className="mb-4 text-4xl font-extrabold">
                  Začnime stavať váš vysnívaný domov
                </h3>
                <p className="mb-8 text-white/85">
                  Nezáväzná konzultácia a cenová ponuka zdarma.
                </p>

                <a
                  href="#kontakt"
                  className="inline-flex border border-white/60 px-7 py-4 text-xs font-bold uppercase tracking-wide transition hover:bg-white hover:text-red-600"
                >
                  Objednať konzultáciu <span className="ml-4">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-24" />
      </section>
    </main>
  );
}