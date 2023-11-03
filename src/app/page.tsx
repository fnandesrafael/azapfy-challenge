import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navigator from '@/components/Navigator';
import SearchBar from '@/components/SearchBar';
import gridElement from '../../public/images/grid_element.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-base-100 font-sans font-medium">
      <Navigator.Root>
        <Navigator.Navbar />
        <Navigator.Dropdown />
      </Navigator.Root>

      <HeroSection />

      <section className="container mb-8 mt-48 px-[4vw] md:mt-52">
        <div className="flex flex-col">
          <h1 className="mb-2 font-head text-3xl uppercase md:text-5xl">
            Heróis
          </h1>
          <p className="mb-8 text-sm opacity-75 md:text-base">
            Pesquise seu herói favorito digitando no campo abaixo.
          </p>
          <Image src={gridElement} alt="" className="absolute left-0 w-8" />

          <SearchBar />
        </div>

        <div className="py-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam
          nesciunt numquam amet nemo earum natus tenetur fuga cupiditate
          assumenda ratione, aliquid corrupti, esse totam perferendis ipsum
          culpa? Consectetur, repudiandae.
        </div>
      </section>
    </main>
  );
}
