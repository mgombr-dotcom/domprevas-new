export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <section className="relative h-[600px]">
        <img src="/hero.jpg" alt="DomPrevas" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Moderné bývanie pre náročných
            </h1>
            <p className="text-lg mb-6 max-w-xl">
              Prémiové projekty, kvalitná architektúra a výnimočné lokality.
            </p>
            <button className="bg-white text-black px-6 py-3 font-semibold">
              Zobraziť projekty
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}