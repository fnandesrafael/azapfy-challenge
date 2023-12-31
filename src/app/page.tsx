'use client';

import Image from 'next/image';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Navigator from '@/components/Navigator';
import SearchBar from '@/components/SearchBar';
import gridElement from '../../public/images/grid_element.png';
import CardDisplay from '@/components/CardDisplay';
import BattleSpan from '@/components/BattleSpan';
import Modal from '@/components/Modal';

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [canShowModal, setCanShowModal] = useState(false);

  return (
    <>
      <Modal canShowModal={canShowModal} setCanShowModal={setCanShowModal} />

      <Navigator />

      <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-base-100 px-[4vw] font-sans font-medium">
        <BattleSpan setCanShowModal={setCanShowModal} />

        <div className="w-full rounded-xl bg-base-200 p-2 py-6 md:p-8">
          <HeroSection />
        </div>

        <section id="play" className="container mb-8 mt-24 pt-8 md:mt-24">
          <div className="flex flex-col">
            <h1 className="z-10 mb-2 font-head text-3xl uppercase md:text-5xl">
              Heróis
            </h1>
            <div className="z-10 mb-6 text-sm opacity-75 md:text-base">
              <p>Pesquise seu herói favorito digitando no campo abaixo.</p>
              <p>
                Em seguida, selecione ele e outro adversário e clique no botão
                "Batalhar!" no canto inferior direito da tela!
              </p>
            </div>
            <Image
              src={gridElement}
              alt=""
              className="absolute left-0 mb-96 hidden w-8 md:flex"
            />

            <SearchBar setIsSearching={setIsSearching} />
          </div>

          <CardDisplay isSearching={isSearching} />
        </section>
      </main>
    </>
  );
}
