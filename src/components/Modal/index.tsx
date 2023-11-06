'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import useHeroesStore, { PowerStatsProps } from '@/store/heroesStore';

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
            <div className="flex h-[30rem] items-center justify-between gap-8 border border-[#16160a] bg-base-100 p-12 shadow-comic">
              {/* Hero 1 */}
              <div className="flex flex-col gap-6 text-start">
                <div className="h-72 w-56 overflow-hidden border-[2px] border-[#16160a] shadow-comic">
                  <Image
                    src={selectedHeroes[0].images.lg}
                    alt={`Image of ${selectedHeroes[0].name}`}
                    width={600}
                    height={600}
                  />
                </div>

                <h1 className="w-56 justify-end font-head text-xl">
                  {selectedHeroes[0].name}
                </h1>
              </div>

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

              {/* Hero 2 */}
              <div className="flex flex-col gap-6 text-end">
                <div className="h-72 w-56 overflow-hidden border-[2px] border-[#16160a] shadow-comic">
                  <Image
                    src={selectedHeroes[1].images.lg}
                    alt={`Image of ${selectedHeroes[1].name}`}
                    width={600}
                    height={600}
                  />
                </div>

                <h1 className="w-56 justify-end font-head text-xl">
                  {selectedHeroes[1].name}
                </h1>
              </div>
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
