import React from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { HeroProps } from '@/store/heroesStore';
import winnerElement from '../../../public/images/winner_element.png';

type BattlerCardProps = {
  hero: HeroProps;
  align: string;
  isWinner?: boolean;
};

export default function CompetitorCard({
  hero,
  align,
  isWinner,
}: BattlerCardProps) {
  return (
    <>
      <div className={`relative flex flex-col gap-6 pt-8 ${`text-${align}`}`}>
        <AnimatePresence mode="wait">
          {isWinner && (
            <Image
              className="absolute -right-20 -top-12"
              src={winnerElement}
              alt="Image element showing who's the winner."
              width={300}
              height={300}
            />
          )}
        </AnimatePresence>

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
