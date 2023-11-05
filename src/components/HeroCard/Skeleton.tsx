import React from 'react';
import { motion } from 'framer-motion';
import Spinner from '@/components/Spinner';

export default function Skeleton() {
  return (
    <motion.div
      className="text-contrast group relative flex h-80 w-64 animate-pulse flex-col items-center justify-center overflow-hidden border-[2px] border-[#16160a] bg-black hover:cursor-pointer hover:border-[2px] md:h-64 md:w-52"
      role="skeleton"
    >
      <Spinner fontSize="text-2xl" textColor="text-white" />
    </motion.div>
  );
}
