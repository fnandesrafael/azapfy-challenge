'use client';

import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { HeroProps } from '@/store/heroesStore';
import HeroCard from '../HeroCard';
import Skeleton from '../HeroCard/Skeleton';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function CardDisplay() {
  const { data } = useSWR<Array<HeroProps>>(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    fetcher,
  );

  return (
    <div className="flex flex-col items-center gap-x-8 gap-y-12 py-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data
        ? data?.map((hero) => <HeroCard key={hero.id} data={hero} />)
        : Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
    </div>
  );
}
