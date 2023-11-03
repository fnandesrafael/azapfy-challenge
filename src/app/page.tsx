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

      <section className="container mt-24 px-[5vw]">
        <div className="flex flex-col">
          <h1 className="mb-2 font-head text-5xl uppercase">Heróis</h1>
          <p className="mb-8 opacity-75">
            Pesquise seu herói favorito digitando no campo abaixo
          </p>

          <SearchBar />
        </div>
      </section>
    </main>
  );
}
