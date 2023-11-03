import React from 'react';

export default function SearchBar() {
  return (
    <div className="input-group w-full" role="search">
      <input
        type="text"
        placeholder="Batman, Superman etc..."
        className="input input-bordered w-full placeholder:text-[#16160a20] focus:outline-none md:w-1/2"
        role="searchbox"
      />
      <button className="btn btn-square btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
