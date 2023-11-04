import React from 'react';

export default function Skeleton() {
  return (
    <div
      className="text-contrast group relative flex h-80 w-64 animate-pulse flex-col items-center justify-center overflow-hidden border-[2px] border-[#16160a] bg-secondary transition-all duration-200 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:border-[2px] hover:shadow-comic md:h-64 md:w-52"
      role="skeleton"
    />
  );
}
