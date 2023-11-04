import React from 'react';
import { motion } from 'framer-motion';
import Spinner from '@/components/Spinner';

export default function Skeleton() {
  return (
    <motion.div
      className="text-contrast group relative flex h-80 w-64 animate-pulse flex-col items-center justify-center overflow-hidden border-[2px] border-[#16160a] bg-black transition-all duration-200 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:border-[2px] hover:shadow-comic md:h-64 md:w-52"
      role="skeleton"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Spinner fontSize="text-xl" textColor="text-white" />
    </motion.div>
  );
}
