import React from 'react';
import Image from 'next/image';
import { HeroProps } from '@/store/heroesStore';

type BattlerCardProps = {
  hero: HeroProps;
  align: string;
};

export default function BattlerCard({ hero, align }: BattlerCardProps) {
  return (
    <>
      <div className={`text- flex flex-col gap-6 pt-8${align}`}>
        <div className="h-72 w-56 overflow-hidden border-[2px] border-[#16160a] shadow-comic">
          <Image
            src={hero.images.lg}
            alt={`Image of ${hero.name}`}
            width={600}
            height={600}
          />
        </div>

        <h1 className="w-56 justify-end font-head text-xl">{hero.name}</h1>
      </div>
    </>
  );
}
