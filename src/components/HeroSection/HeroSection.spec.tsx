import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Hero from '.';

describe('<HeroSection /> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Hero />);

    const sut = getByRole('hero');

    expect(sut).toBeInTheDocument();
  });

  it('should have both heading and paragraph with matching texts', () => {
    const { getByRole } = render(<Hero />);

    const [sutA, sutB] = [
      getByRole('heading', { level: 1 }),
      getByRole('paragraph'),
    ];

    expect(sutA).toBeInTheDocument();
    expect(sutA).toHaveTextContent(/jornada do herói/i);

    expect(sutB).toBeInTheDocument();
    expect(sutB).toHaveTextContent(
      /Ponha seus heróis favoritos em uma batalha justa e deixe que vença o melhor!/i,
    );
  });

  it('should have two buttons with matching texts', () => {
    const { getAllByRole } = render(<Hero />);

    const sut = getAllByRole('button');

    expect(sut.length).toBe(2);

    expect(sut[0]).toHaveTextContent(/jogar!/i);
    expect(sut[1]).toHaveTextContent(/sobre/i);
  });

  it('should have an image', () => {
    const { getByRole } = render(<Hero />);

    const sut = getByRole('img');

    expect(sut).toBeInTheDocument();
  });
});
