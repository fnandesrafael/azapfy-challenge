'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useHeroesStore, { PowerStatsProps } from '@/store/heroesStore';
import BattlerCard from '../BattlerCard';

type ModalProps = {
  canShowModal: boolean;
  setCanShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ canShowModal, setCanShowModal }: ModalProps) {
  const { selectedHeroes } = useHeroesStore();

  return (
    <AnimatePresence mode="wait">
      {canShowModal && (
        <>
          <motion.div
            className="fixed z-50 mt-6 flex w-full flex-col items-center justify-center gap-4 px-[15vw]"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
          >
            <button
              className="btn btn-primary  w-12 rounded-full hover:shadow-comic"
              onClick={() => setCanShowModal(false)}
            >
              <AiOutlineClose />
            </button>
            <div className="flex h-[30rem] items-center justify-between gap-8 border-[2px] border-[#16160a] bg-base-100 p-12 shadow-comic">
              {/* Hero 1 */}
              <BattlerCard align="start" hero={selectedHeroes[0]} />

              <div>
                {Object.keys(selectedHeroes[0].powerstats).map(
                  (power: string) => (
                    <div className="mb-1 flex items-center justify-between gap-8 font-head">
                      <h1 className="font-sans text-lg">
                        {
                          selectedHeroes[0].powerstats[
                            power as keyof PowerStatsProps
                          ]
                        }
                      </h1>
                      <h2 className="text-sm uppercase">{power}</h2>
                      <h1 className="font-sans text-lg">
                        {
                          selectedHeroes[1].powerstats[
                            power as keyof PowerStatsProps
                          ]
                        }
                      </h1>
                    </div>
                  ),
                )}
              </div>

              <BattlerCard align="end" hero={selectedHeroes[1]} />
            </div>
          </motion.div>

          <motion.span
            className="fixed z-40 flex h-screen w-full items-center justify-center bg-black opacity-25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
          ></motion.span>
        </>
      )}
    </AnimatePresence>
  );
}
