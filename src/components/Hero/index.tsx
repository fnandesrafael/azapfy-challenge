import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/images/heroimage.png';

export default function Hero() {
  return (
    <section
      className="container mt-16 flex flex-row justify-between px-[5vw]"
      role="hero"
    >
      <div className="flex max-w-xl flex-col">
        <h1 className="mb-8 font-head text-8xl uppercase">Jornada do Herói</h1>
        <p className="mb-24 max-w-lg opacity-75" role="paragraph">
          Ponha seus heróis favoritos em uma batalha justa e deixe que vença o
          melhor!
        </p>

        <div className="flex flex-row items-start gap-4">
          <button className="hover:shadow-comic btn btn-primary rounded-full px-8">
            Jogar!
          </button>
          <button className="hover:shadow-comic btn btn-secondary rounded-full px-8">
            Sobre
          </button>
        </div>
      </div>

      <div>
        <Image
          src={heroImage}
          alt="Imagem de um menino em modelagem 3D correndo com uma capa de super herói."
          className="absolute right-0 top-24 w-[600px]"
        />
      </div>
    </section>
  );
}
