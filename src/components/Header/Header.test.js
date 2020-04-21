import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Team View Tests', () => {
  // eslint-disable-next-line one-var
  let testWrapper;
  beforeEach(() => {
    testWrapper = <Header />;
  });
  it('renders Header View', async () => {
    const { getByText } = render(testWrapper);

    expect(getByText('Pokémon Team Builder')).toBeInTheDocument();
  });
});
