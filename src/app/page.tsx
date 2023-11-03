import Hero from '@/components/Hero';
import Navigator from '@/components/Navigator';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-base-100 font-sans font-medium">
      <Navigator.Root>
        <Navigator.Navbar />
        <Navigator.Dropdown />
      </Navigator.Root>

      <Hero />

      <section className="container mb-8 mt-48 px-[4vw] md:mt-24">
        <div className="flex flex-col">
          <h1 className="mb-2 font-head text-3xl uppercase md:text-5xl">
            Heróis
          </h1>
          <p className="mb-8 text-sm opacity-75 md:text-base">
            Pesquise seu herói favorito digitando no campo abaixo.
          </p>

          <SearchBar />
        </div>
      </section>
    </main>
  );
}
