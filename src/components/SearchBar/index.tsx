'use client';

import React, { FormEvent, useRef } from 'react';
import useHeroesStore from '@/store/heroesStore';
import sortObjectsByStringMatch from '@/utils/sortByTextMatch';

type SearchBarProps = {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchBar({ setIsSearching }: SearchBarProps) {
  const { heroes, filterHeroes } = useHeroesStore();
  const inputValue = useRef<HTMLInputElement>(null);
  const debounce = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    setIsSearching(true);

    debounce.current = setTimeout(() => {
      const sortedArray = sortObjectsByStringMatch(
        heroes,
        inputValue.current?.value.toLowerCase() as string,
      );
      filterHeroes(sortedArray);
      setIsSearching(false);
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
    </form>
  );
}
