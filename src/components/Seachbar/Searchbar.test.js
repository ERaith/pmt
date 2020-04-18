import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import Searchbar from './Searchbar';
import { nameFilter, typeFilter, generalFilter } from '../../utils/index';
import { filterPokemon } from '../../actionCreators/index';
import { mockPokemonList, mockPokemon } from '../../../public/mockTestFiles';
jest.mock('../../utils/index');

describe('Search bar', () => {
  let initialState;
  let testWrapper;
  let store;

  beforeEach(() => {
    initialState = {
      pokemonList: mockPokemonList,
      filteredPokemon: mockPokemonList,
    };
    store = createStore(rootReducer, initialState);
    testWrapper = (
      <Provider store={store}>
        <Searchbar />
      </Provider>
    );
    generalFilter.mockReturnValue(mockPokemonList);
  });

  it('should render the search bar', () => {
    const { getByLabelText } = render(testWrapper);
    expect(getByLabelText('Search by Name')).toBeInTheDocument();
    expect(getByLabelText('Search by Type')).toBeInTheDocument();
  });
  it('should call generalFilter with the appropriate arguments', () => {
    const { getByLabelText } = render(testWrapper);
    let searchByName = getByLabelText('Search by Name');
    fireEvent.change(searchByName, { target: { value: 'b' } });
    expect(generalFilter).toBeCalledWith(mockPokemonList, 'b', '');
  });
});
