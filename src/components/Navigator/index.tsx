import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';

export default function Navigator() {
  return (
    <header
      className="flex w-full flex-row justify-end bg-base-100 p-4 font-sans md:p-4 md:px-12"
      role="header"
    >
      <nav
        className="navbar hidden justify-end gap-4 text-neutral md:flex"
        role="navigation"
      >
        <Link
          className="btn btn-ghost btn-md rounded-full px-8 normal-case hover:shadow-comic"
          href="#play"
        >
          Jogar
        </Link>
        <Link
          className="btn btn-ghost btn-md rounded-full px-8 normal-case hover:shadow-comic"
          href="http://homologacao3.azapfy.com.br/api/ps/metahumans"
          target="_blank"
        >
          API
        </Link>
        <Link
          className="btn btn-ghost btn-md rounded-full px-8 normal-case hover:shadow-comic"
          href="https://github.com/fnandesrafael/azapfy-challenge"
          target="_blank"
        >
          Sobre
        </Link>
      </nav>

      <div
        className="dropdown dropdown-end z-20 flex md:hidden"
        role="dropdown"
      >
        <label
          tabIndex={0}
          className="btn-base btn h-12 w-12 rounded-full px-0"
        >
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
    </header>
  );
}
