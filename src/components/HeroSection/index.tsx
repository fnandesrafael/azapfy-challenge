import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import minihero from '../../../public/images/minihero.png';

export default function HeroSection() {
  return (
    <section
      className="container mt-2 flex flex-row justify-between lg:mt-16"
      role="hero"
    >
      <div className="z-10 flex max-w-xl flex-col">
        <h1 className="mb-4 font-head text-4xl uppercase md:text-8xl lg:mb-8">
          Jornada do Herói
        </h1>
        <p
          className="mb-24 w-full text-sm opacity-75 lg:max-w-lg lg:text-base"
          role="paragraph"
        >
          Ponha seus heróis favoritos em uma batalha justa e deixe que vença o
          melhor!
        </p>

        <div className="z-10 flex flex-col items-start gap-4 md:flex-row">
          <Link
            className="btn btn-primary w-32 rounded-full px-8 shadow-comic hover:shadow-comic lg:shadow-none"
            href="#play"
            role="button"
          >
            Jogar!
          </Link>
          <Link
            className="btn btn-secondary w-32 rounded-full px-8 shadow-comic hover:shadow-comic lg:shadow-none"
            href="http://homologacao3.azapfy.com.br/api/ps/metahumans"
            target="_blank"
            role="button"
          >
            Sobre
          </Link>
        </div>
      </div>

      <div>
        <Image
          src={minihero}
          alt="Imagem de um menino em modelagem 3D correndo com uma capa de super herói."
          className="absolute -right-12 top-60 w-[300px] transition-transform duration-1000 ease-in-out md:top-44 md:w-[450px] lg:right-0 lg:top-24 lg:w-[600px]"
          priority
        />
      </div>
    </section>
  );
}
