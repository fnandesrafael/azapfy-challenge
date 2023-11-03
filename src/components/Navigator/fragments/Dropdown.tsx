import Link from 'next/link';
import React from 'react';
import { LuMenu } from 'react-icons/lu';

export default function Dropdown() {
  return (
    <div className="dropdown dropdown-end flex md:hidden" role="dropdown">
      <label tabIndex={0} className="btn-base btn h-12 w-12 rounded-full px-0">
        <LuMenu className="text-2xl" />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] gap-2 bg-base-200 font-medium text-neutral shadow-comic "
      >
        <li className="flex w-full items-center justify-center">
          <Link className="rounded-full" href="/">
            Jogar
          </Link>
        </li>
        <li className="flex w-full items-center justify-center">
          <Link
            className="rounded-full"
            href="http://homologacao3.azapfy.com.br/api/ps/metahumans"
            target="_blank"
          >
            API
          </Link>
        </li>
        <li className="flex w-full items-center justify-center">
          <Link
            className="rounded-full"
            href="https://github.com/fnandesrafael/azapfy-challenge"
            target="_blank"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </div>
  );
}
