import React from 'react';

export default function Skeleton() {
  return (
    <div className="text-contrast group relative flex h-60 w-52 animate-pulse flex-col items-center justify-center overflow-hidden border-[2px] border-[#16160a] bg-secondary transition-all duration-200 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:border-[2px] hover:shadow-comic" />
  );
}
