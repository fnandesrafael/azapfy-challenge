import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <form className="input-group w-full gap-4" role="searchbox">
      <input
        type="text"
        placeholder="Batman, Superman etc..."
        className="input input-bordered w-full text-sm transition-shadow duration-200 ease-in-out placeholder:text-sm placeholder:text-[#16160a20] focus:shadow-comic focus:outline-none md:w-1/2 md:text-sm md:placeholder:text-sm"
        role="search-input"
      />
      <button className="btn btn-primary h-12 w-12 rounded-full shadow-comic md:shadow-none md:hover:shadow-comic">
        <BiSearch className="text-2xl" />
      </button>
    </form>
  );
}
