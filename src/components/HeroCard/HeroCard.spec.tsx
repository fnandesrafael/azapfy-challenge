import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeroCard from '.';
import { HeroProps } from '@/store/heroesStore';

const mockedHero: HeroProps = {
  id: 0,
  name: 'Hero',
  appearance: {
    gender: 'Male',
    race: 'Human',
    height: ['', ''],
    eyeColor: 'Black',
    weight: ['', ''],
    hairColor: 'Black',
  },
  powerstats: {
    durability: 0,
    combat: 0,
    intelligence: 0,
    speed: 0,
    power: 0,
    strength: 0,
  },
  images: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
  },
  slug: '',
};

describe('<HeroCard /> component', () => {
  it('should be in the document rendering the hero name', () => {
    const { getByText } = render(<HeroCard data={mockedHero} />);

    const sut = getByText(/hero/i);

    expect(sut).toBeInTheDocument();
  });
});
