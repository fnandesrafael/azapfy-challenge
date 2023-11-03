import React from 'react';
// import Image from 'next/image';
import { HeroProps } from '@/store/heroesStore';

type HeroCardProps = {
  data: HeroProps;
};

export default function HeroCard({ data }: HeroCardProps) {
  return (
    <div className="text-contrast group relative flex h-60 w-52 flex-col items-center justify-center overflow-hidden border border-[#16160a] bg-primary transition-all duration-200 ease-in-out hover:border hover:shadow-comic">
      <img className="w-full" src={data.images.md} alt="" />

      <div className="absolute -bottom-96 h-24 w-full bg-black p-4 transition-all duration-200 ease-in-out group-hover:bottom-0">
        <h2 className="font-base text-white">{data.name}</h2>
      </div>
    </div>
  );
}
