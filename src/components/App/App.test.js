import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { mockPokemonList,mockTypes } from '../../../public/mockTestFiles';
import { fetchPokemon,fetchTypes } from '../../apiCalls/apiCalls';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('../../apiCalls/apiCalls');

describe('Pokedex Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  beforeEach(() => {
    fetchPokemon.mockResolvedValue(mockPokemonList);
    store = createStore(rootReducer);
    fetchTypes.mockResolvedValue(mockTypes)
    testWrapper = (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
  it('renders the pokedex', async () => {
    const { getByAltText } = render(testWrapper);
    await waitFor(() => expect(getByAltText('bulbasaur')).toBeInTheDocument());
  });
  it('can filter the pokemon', async () => {
    const { getByAltText, debug, getByLabelText } = render(testWrapper);
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    expect(ivysaur).toBeInTheDocument();
    let searchByName = getByLabelText('Search by Name');
    fireEvent.change(searchByName, { target: { value: 'b' } });
    expect(ivysaur).not.toBeInTheDocument();
  });
});
