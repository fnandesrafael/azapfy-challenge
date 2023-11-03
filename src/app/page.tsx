import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navigator from '@/components/Navigator';
import SearchBar from '@/components/SearchBar';
import gridElement from '../../public/images/grid_element.png';
import Display from '@/components/Display';

export default function Home() {
  return (
    <>
      <Navigator.Root>
        <Navigator.Navbar />
        <Navigator.Dropdown />
      </Navigator.Root>
      <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-base-100 px-[4vw] font-sans font-medium">
        <HeroSection />

        <section className="container mb-8 mt-48 md:mt-52">
          <div className="flex flex-col">
            <h1 className="z-10 mb-2 font-head text-3xl uppercase md:text-5xl">
              Heróis
            </h1>
            <p className="z-10 mb-6 text-sm opacity-75 md:text-base">
              Pesquise seu herói favorito digitando no campo abaixo.
            </p>
            <Image
              src={gridElement}
              alt=""
              className="absolute left-0 mb-96 hidden w-8 md:flex"
            />

            <SearchBar />
          </div>

          <Display />
        </section>
      </main>
    </>
  );
}
