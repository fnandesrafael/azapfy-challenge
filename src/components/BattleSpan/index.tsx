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
    } else if (selectedHeroes.length === 0) {
      setCanShow(false);
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
          <motion.span
            className="-mb-20 -mr-12"
            whileInView={{
              transform: 'rotate(360deg)',
              transition: {
                duration: 60,
                repeat: Infinity,
                repeatDelay: 0,
                ease: 'linear',
              },
            }}
          >
            <Image
              src={starElement}
              alt="Star element"
              width={300}
              height={300}
            />
          </motion.span>

          <div className="absolute z-40 flex h-full w-full flex-row items-center justify-start gap-4 pl-16">
            <AnimatePresence>
              {selectedHeroes.map((hero) => (
                <PreviewCard data={hero} key={hero.id} />
              ))}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {selectedHeroes.length === 2 && (
                <motion.button
                  className="btn btn-primary fixed bottom-48 right-12 rounded-full normal-case text-[#16160a] hover:shadow-comic"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  exit={{ scale: 0 }}
                >
                  Batalhar!
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
