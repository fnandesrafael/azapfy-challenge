import { create } from 'zustand';

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

export type PowerStatsProps = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

type HeroesStoreProps = {
  heroes: Array<HeroProps>;
  filteredHeroes: Array<HeroProps>;
  selectedHeroes: Array<HeroProps>;
  setHeroes: (payload: Array<HeroProps>) => void;
  filterHeroes: (payload: Array<HeroProps>) => void;
  addHero: (payload: HeroProps) => void;
  removeHero: (payload: HeroProps) => void;
};

const useHeroesStore = create<HeroesStoreProps>((set) => ({
  heroes: [],
  filteredHeroes: [],
  selectedHeroes: [],
  setHeroes: (payload) => set(() => ({ heroes: payload })),
  filterHeroes: (payload) => set(() => ({ filteredHeroes: payload })),
  addHero: (payload) =>
    set((prevState) => {
      if (prevState.selectedHeroes.length < 2) {
        return { selectedHeroes: prevState.selectedHeroes.concat(payload) };
      }
      return prevState;
    }),
  removeHero: (payload) =>
    set((prevState) => ({
      selectedHeroes: prevState.selectedHeroes.filter(
        (hero) => hero.id !== payload.id,
      ),
    })),
}));

export default useHeroesStore;
