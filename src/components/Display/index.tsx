'use client';

import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import useHeroesStore from '@/store/heroesStore';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Display() {
  const { setHeroes } = useHeroesStore();
  const { data } = useSWR(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    fetcher,
    { onSuccess: () => setHeroes(data) },
  );

  return (
    <>
      <div className="py-12">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        tempore molestiae optio mollitia sequi, fugiat deleniti non provident,
        voluptatem corrupti ut. Modi excepturi, quam quia commodi saepe ullam
        incidunt quos?
      </div>
    </>
  );
}
