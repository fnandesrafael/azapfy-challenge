'use client';

import React, { useEffect } from 'react';
import useHeroesStore from '@/store/heroesStore';
import HeroCard from '../HeroCard';
import Skeleton from '../HeroCard/Skeleton';
import getHeroes from '@/api';

export default function CardDisplay() {
  const { heroes, setHeroes, filteredHeroes } = useHeroesStore();

  useEffect(() => {
    async function fetchData() {
      setHeroes(await getHeroes());
    }

    fetchData();
  }, [setHeroes]);

  return (
    <div className="flex flex-col items-center gap-x-8 gap-y-12 py-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {heroes.length === 0 &&
        Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} />)}

      {filteredHeroes.length > 0
        ? filteredHeroes.map((hero) => <HeroCard key={hero.id} data={hero} />)
        : heroes.map((hero) => <HeroCard key={hero.id} data={hero} />)}
    </div>
  );
}
