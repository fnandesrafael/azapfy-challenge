import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navigator from '.';

describe('<Navigator/> component', () => {
  it('<Navigator.Root /> should be in the document', () => {
    const { getByText } = render(
      <Navigator.Root>
        <p>mussum ipsum</p>
      </Navigator.Root>,
    );

    const sut = getByText(/mussum ipsum/i);

    expect(sut).toBeInTheDocument();
  });

  it('<Navigator.Navbar /> should be displayed when screen is md', () => {
    const { getByRole } = render(
      <Navigator.Root>
        <Navigator.Navbar />
      </Navigator.Root>,
    );

    const sut = getByRole('navigation');

    expect(sut).toBeInTheDocument();
  });
});
