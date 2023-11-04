import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navigator from '.';

describe('<Navigator/> component', () => {
  it('<Navigator.Root /> should be in the document', () => {
    const { getByRole } = render(<Navigator />);

    const sut = getByRole('header');

    expect(sut).toBeInTheDocument();
  });

  it('<Navigator.Navbar /> should be in the document', () => {
    const { getByRole } = render(<Navigator />);

    const sut = getByRole('navigation');

    expect(sut).toBeInTheDocument();
  });

  it('<Navigator.Dropdown /> should be in the document', () => {
    const { getByRole } = render(<Navigator />);

    const sut = getByRole('dropdown');

    expect(sut).toBeInTheDocument();
  });
});
