'use client';

import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import useHeroesStore from '@/store/heroesStore';
import HeroCard from '../HeroCard';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Display() {
  const { setHeroes, heroes } = useHeroesStore();
  const { data } = useSWR(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    fetcher,
    { onSuccess: () => setHeroes(data) },
  );

  return (
    <>
      <div className="grid gap-x-4 gap-y-10 py-12 lg:grid-cols-5">
        {heroes?.map((hero) => <HeroCard data={hero} />)}
      </div>
    </>
  );
}
