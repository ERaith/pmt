import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { mockPokemonList, mockTypes } from '../../../public/mockTestFiles';
import { fetchPokemon, fetchTypes } from '../../apiCalls/apiCalls';
import { BrowserRouter } from 'react-router-dom';
import Teamstats from './Teamstats';

jest.mock('../../apiCalls/apiCalls');

describe('Pokedex Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  beforeEach(() => {
    initialState = { typeDetails: mockTypes };
    fetchPokemon.mockResolvedValue(mockPokemonList);
    store = createStore(rootReducer, initialState);
    fetchTypes.mockResolvedValue(mockTypes);
    testWrapper = (
      <BrowserRouter>
        <Provider store={store}>
          <Teamstats />
        </Provider>
      </BrowserRouter>
    );
  });
  it('renders the table', async () => {
    const { getByText } = render(testWrapper);
    expect(getByText('normal')).toBeInTheDocument();
    expect(getByText('fire')).toBeInTheDocument();
    expect(getByText('ice')).toBeInTheDocument();
    expect(getByText('water')).toBeInTheDocument();
  });
});
