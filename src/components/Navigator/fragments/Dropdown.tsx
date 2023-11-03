import Link from 'next/link';
import React from 'react';
import { LuMenu } from 'react-icons/lu';

export default function Dropdown() {
  return (
    <div className="dropdown dropdown-end flex md:hidden" role="dropdown">
      <label tabIndex={0} className="btn h-12 w-12 rounded-full p-2">
        <LuMenu className="text-2xl" />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[1] bg-base-200 font-medium text-neutral shadow"
      >
        <li className="flex w-full items-center justify-center">
          <Link href="/">Jogar</Link>
        </li>
        <li className="flex w-full items-center justify-center">
          <Link href="/">API</Link>
        </li>
        <li className="flex w-full items-center justify-center">
          <Link href="/">Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
