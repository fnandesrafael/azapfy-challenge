'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import starElement from '../../../public/images/star_element.png';

export default function BattleCard() {
  const [canShow, setCanShow] = useState(false);

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
