import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { motion } from 'framer-motion';

type SpinnerProps = {
  fontSize: string;
  textColor: string;
};

export default function Spinner({ fontSize, textColor }: SpinnerProps) {
  return (
    <motion.span className="flex flex-col items-center justify-center">
      <AiOutlineLoading
        className={`mx-4 animate-spin duration-500 ${fontSize} ${textColor}`}
      />
    </motion.span>
  );
}
