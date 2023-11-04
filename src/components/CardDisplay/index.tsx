'use client';

import React, { useEffect } from 'react';
import useHeroesStore from '@/store/heroesStore';
import HeroCard from '../HeroCard';
import Skeleton from '../HeroCard/Skeleton';
import getHeroes from '@/api';

type CardDisplayProps = {
  isSearching: boolean;
};

export default function CardDisplay({ isSearching }: CardDisplayProps) {
  const { heroes, setHeroes, filteredHeroes } = useHeroesStore();

  useEffect(() => {
    async function fetchData() {
      setHeroes(await getHeroes());
    }

    fetchData();
  }, [setHeroes]);

  return (
    <div className="flex flex-col items-center gap-x-8 gap-y-12 py-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {(heroes.length === 0 || isSearching) &&
        Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} />)}

      {filteredHeroes.length > 0 &&
        !isSearching &&
        filteredHeroes.map((hero) => <HeroCard key={hero.id} data={hero} />)}

      {!isSearching &&
        filteredHeroes.length === 0 &&
        heroes.map((hero) => <HeroCard key={hero.id} data={hero} />)}
    </div>
  );
}
