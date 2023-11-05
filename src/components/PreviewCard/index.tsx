import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import useHeroesStore, { HeroProps } from '@/store/heroesStore';

type PreviewCardProps = {
  data: HeroProps;
};

export default function PreviewCard({ data }: PreviewCardProps) {
  const { removeHero } = useHeroesStore();

  return (
    <motion.div
      key={data.id}
      className="group flex w-[4.5rem] flex-col items-center justify-center rounded-sm border-[2px] border-[#16160a] bg-base-100 shadow-comic"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: 0.2 } }}
      exit={{ scale: 0 }}
      whileHover={{ y: '-1rem' }}
    >
      <button
        className="btn btn-primary absolute w-12 rounded-full opacity-0 hover:shadow-comic group-hover:opacity-100"
        onClick={() => removeHero(data)}
      >
        <AiOutlineClose className="text-xl text-[#16160a]" />
      </button>
      <Image
        className="w-full"
        src={data.images.sm}
        alt={`Image of ${data.name}`}
        width={108}
        height={140}
      />
    </motion.div>
  );
}
