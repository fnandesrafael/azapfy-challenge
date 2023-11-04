'use client';

import React, { useRef, useState } from 'react';
import { BiLoader, BiSearch } from 'react-icons/bi';
import useHeroesStore from '@/store/heroesStore';

export default function SearchBar() {
  const { heroes, filterHeroes } = useHeroesStore();
  const [isLoading, setIsLoading] = useState(false);
  const inputValue = useRef<HTMLInputElement>(null);
  const debounce = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = () => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    setIsLoading(true);

    debounce.current = setTimeout(() => {
      filterHeroes(
        heroes.filter((hero) =>
          hero.name
            .toLowerCase()
            .includes(
              (inputValue.current as HTMLInputElement).value.toLowerCase(),
            ),
        ),
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="input-group w-full gap-4" role="searchbox">
      <input
        type="text"
        placeholder="Batman, Superman etc..."
        className="input input-bordered w-full text-sm transition-shadow duration-200 ease-in-out placeholder:text-sm placeholder:text-[#16160a20] focus:shadow-comic focus:outline-none md:w-1/2 md:text-sm md:placeholder:text-sm"
        role="search-input"
        ref={inputValue}
        onChange={handleSearch}
      />
      <button
        className="btn btn-primary h-12 w-12 rounded-full shadow-comic md:shadow-none md:hover:shadow-comic"
        onClick={handleSearch}
      >
        {isLoading ? (
          <BiLoader className="text-2xl" />
        ) : (
          <BiSearch className="text-2xl" />
        )}
      </button>
    </form>
  );
}
