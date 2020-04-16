import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import PokemonMini from './PokemonMini';
import { mockPokemon } from '../../../public/mockTestFiles';

describe('Pokemon Mini Tests', () => {
  // eslint-disable-next-line one-var
  let testWrapper;
  beforeEach(() => {
    testWrapper = <PokemonMini pokemon={mockPokemon} />;
  });
  it('renders the pokedex', () => {
    const { getByAltText } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
  });
});
