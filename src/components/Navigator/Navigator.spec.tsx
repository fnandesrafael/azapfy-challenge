import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navigator from '.';

describe('<Navigator.Root/> fragment', () => {
  it('should be in the document', () => {
    const { getByText } = render(
      <Navigator.Root>
        <p>mussum ipsum</p>
      </Navigator.Root>,
    );

    const sut = getByText(/mussum ipsum/i);

    expect(sut).toBeInTheDocument();
  });
});
