import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SearchBar from '.';

describe('<SearchBar /> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<SearchBar />);

    const sut = getByRole('searchbox');

    expect(sut).toBeInTheDocument();
  });

  it('should have an input with placeholder "Batman, Superman etc..."', () => {
    const { getByPlaceholderText } = render(<SearchBar />);

    const sut = getByPlaceholderText('Batman, Superman etc...');

    expect(sut).toBeInTheDocument();
  });

  it('should have a button', () => {
    const { getByRole } = render(<SearchBar />);

    const sut = getByRole('button');

    expect(sut).toBeInTheDocument();
  });
});
