import create from 'zustand';

export type HeroProps = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

type HeroesStoreProps = {
  heroes: Array<HeroProps>;
  filteredHeroes: Array<HeroProps>;
  setHeroes: (payload: Array<HeroProps>) => void;
  filterHeroes: (payload: Array<HeroProps>) => void;
};

const useHeroesStore = create<HeroesStoreProps>((set) => ({
  heroes: [],
  filteredHeroes: [],
  setHeroes: (payload) => set(() => ({ heroes: payload })),
  filterHeroes: (payload) => set(() => ({ filteredHeroes: payload })),
}));

export default useHeroesStore;
