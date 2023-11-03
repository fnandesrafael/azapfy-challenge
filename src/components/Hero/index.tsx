import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/images/heroimage.png';

export default function Hero() {
  return (
    <section
      className="container mt-2 flex flex-row justify-between px-[5vw] md:mt-16"
      role="hero"
    >
      <div className="flex max-w-xl flex-col">
        <h1 className="mb-4 font-head text-4xl uppercase md:mb-8 md:text-8xl">
          Jornada do Herói
        </h1>
        <p
          className="mb-24 w-full text-sm opacity-75 md:max-w-lg md:text-base"
          role="paragraph"
        >
          Ponha seus heróis favoritos em uma batalha justa e deixe que vença o
          melhor!
        </p>

        <div className="z-10 flex flex-row items-start gap-4">
          <button className="hover:shadow-comic shadow-comic btn btn-primary rounded-full px-8 md:shadow-none">
            Jogar!
          </button>
          <button className="hover:shadow-comic shadow-comic btn btn-secondary rounded-full px-8 md:shadow-none">
            Sobre
          </button>
        </div>
      </div>

      <div>
        <Image
          src={heroImage}
          alt="Imagem de um menino em modelagem 3D correndo com uma capa de super herói."
          className="absolute -right-12 top-60 w-[300px] md:right-0 md:top-24 md:w-[600px]"
        />
      </div>
    </section>
  );
}
