import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { mockPokemonList } from '../../../public/mockTestFiles';
import { fetchPokemon } from '../../apiCalls/apiCalls';
import App from './App'

jest.mock('../../apiCalls/apiCalls');

describe('Pokedex Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  beforeEach(() => {
    fetchPokemon.mockResolvedValue(mockPokemonList);
    store = createStore(rootReducer);
    testWrapper = (
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('renders the pokedex', async () => {
    const { getByAltText } = render(testWrapper);
    await waitFor(() => expect(getByAltText('bulbasaur')).toBeInTheDocument());
  });
});