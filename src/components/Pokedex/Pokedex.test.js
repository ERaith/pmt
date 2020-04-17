import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Pokedex from './Pokedex';
import { rootReducer } from '../../reducers/index';
import { mockPokemonList } from '../../../public/mockTestFiles';
import { fetchPokemon } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('Pokedex Tests', () => {
  // eslint-disable-next-line one-var
  let store, testWrapper;
  beforeEach(() => {
    fetchPokemon.mockResolvedValue(mockPokemonList);
    store = createStore(rootReducer);
    testWrapper = (
      <Provider store={store}>
        <Pokedex />
      </Provider>
    );
  });
  it('renders the pokedex', async () => {
    const { getByAltText } = render(testWrapper);
    await waitFor(() => expect(getByAltText('bulbasaur')).toBeInTheDocument());
  });
});
