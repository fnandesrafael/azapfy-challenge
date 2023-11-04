import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroProps } from '@/store/heroesStore';

type HeroCardProps = {
  data: HeroProps;
};

export default function HeroCard({ data }: HeroCardProps) {
  return (
    <motion.div
      className="text-contrast group relative flex h-80 w-64 flex-col items-center justify-center overflow-hidden border-[2px] border-[#16160a] transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-[2px] hover:shadow-comic md:h-64 md:w-52"
      role="card"
      initial={{ rotateZ: '-15deg', rotateX: '-15deg' }}
      animate={{ rotateZ: 0, rotateX: 0 }}
      whileHover={{ y: '-1rem' }}
    >
      <Image
        className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={`${data.images.md}`}
        alt=""
        width={208}
        height={240}
      />

      <div className="absolute -bottom-96 h-14 w-full bg-black p-4 transition-all duration-200 ease-in-out group-hover:bottom-0">
        <h2 className="font-base text-white">{data.name}</h2>
      </div>
    </motion.div>
  );
}
