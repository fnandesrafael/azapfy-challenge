'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import starElement from '../../../public/images/star_element.png';
import useHeroesStore from '@/store/heroesStore';
import PreviewCard from '../PreviewCard';

export default function BattleSpan() {
  const { selectedHeroes } = useHeroesStore();
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    if (selectedHeroes.length > 0) {
      setCanShow(true);
    }
  }, [selectedHeroes]);

  return (
    <AnimatePresence mode="wait">
      {canShow && (
        <motion.div
          key="battle-card"
          className="fixed bottom-0 right-0 z-30 flex"
          initial={{ y: 200 }}
          animate={{ y: 30 }}
          exit={{ y: 200 }}
        >
          <Image src={starElement} alt="Star element" className="w-[250px]" />

          <div className="absolute z-40 flex h-full w-full flex-row items-center justify-start gap-6 pl-16">
            {selectedHeroes.map((hero) => (
              <PreviewCard data={hero} />
            ))}

            {selectedHeroes.length === 2 && (
              <motion.button
                className="btn btn-primary fixed bottom-10 right-12 rounded-full normal-case hover:shadow-comic"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                Batalhar!
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
