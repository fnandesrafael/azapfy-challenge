'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import starElement from '../../../public/images/star_element.png';
import useHeroesStore from '@/store/heroesStore';

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

          <div className="absolute z-40 flex h-full w-full flex-row items-center justify-center gap-2">
            <span>{selectedHeroes[0]?.id}</span>
            <span>{selectedHeroes[1]?.id}</span>

            <button className="btn btn-primary absolute bottom-9 right-2 normal-case">
              Batalhar!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
