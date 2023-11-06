'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = {
  canShowModal: boolean;
  setCanShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ canShowModal, setCanShowModal }: ModalProps) {
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
            <div className="flex h-[30rem] w-full items-center justify-center bg-base-100 shadow-comic">
              Mussum Ipsum
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
