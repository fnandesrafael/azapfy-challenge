import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="navbar hidden justify-end gap-4 text-neutral md:flex"
      role="navigation"
    >
      <Link
        className="hover:shadow-comic btn btn-ghost btn-md normal-case"
        href="/"
      >
        Jogar
      </Link>
      <Link
        className="hover:shadow-comic btn btn-ghost btn-md normal-case"
        href="http://homologacao3.azapfy.com.br/api/ps/metahumans"
        target="_blank"
      >
        API
      </Link>
      <Link
        className="hover:shadow-comic btn btn-ghost btn-md normal-case"
        href="https://github.com/fnandesrafael/azapfy-challenge"
        target="_blank"
      >
        Sobre
      </Link>
    </nav>
  );
}
