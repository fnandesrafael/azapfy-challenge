import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardDisplay from '.';

describe('<CardDisplay />', () => {
  it('should render a skeleton while data is fetching', () => {
    const { getAllByRole } = render(<CardDisplay />);

    const sut = getAllByRole('skeleton');

    expect(sut.length).toBe(12);
  });
});
