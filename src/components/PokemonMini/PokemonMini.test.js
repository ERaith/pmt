import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { PokemonMini } from './PokemonMini';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { mockPokemon, mockPokemonList } from '../../../public/mockTestFiles';
import {generateUID} from '../../utils'
jest.mock('../../utils');


describe('Pokemon Mini Tests Pokedex', () => {
  // eslint-disable-next-line one-var
  let testWrapper, mockAddToTeam;
  beforeEach(() => {
    mockAddToTeam = jest.fn();
    testWrapper = (
      <PokemonMini
        pokemon={mockPokemonList[0]}
        whereami="Pokedex"
        addPokemonToTeam={mockAddToTeam}
        pokemonTeam={[]}
      />
    );
  });

  it('renders a pokemon with stats', () => {
    const { getByAltText, getByText, debug } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
    expect(getByText('poison')).toBeInTheDocument();
    expect(getByText('grass')).toBeInTheDocument();
  });
  it('renders a pokemon with stats', () => {
    const { getByAltText, getByText, debug } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
    expect(getByText('poison')).toBeInTheDocument();
    expect(getByText('grass')).toBeInTheDocument();
    let bulbasaur = getByAltText('bulbasaur');
    generateUID.mockImplementationOnce(() => 42);
    fireEvent.click(bulbasaur);
    let mockResults = mockPokemonList[0];
    mockResults['teamID'] = 42;
    expect(mockAddToTeam).toBeCalledWith(mockResults);
  });
});

describe('Pokemon Mini Tests Team', () => {
  // eslint-disable-next-line one-var
  let testWrapper, mockDelete, mockShow;
  beforeEach(() => {
    mockDelete = jest.fn();
    mockShow = jest.fn();
    testWrapper = (
      <PokemonMini
        pokemon={mockPokemonList[0]}
        whereami="Team"
        removePokemonFromTeam={mockDelete}
        showDetails={mockShow}
        pokemonTeam={[mockPokemonList[0]]}
      />
    );
  });

  it('renders a pokemon with stats', () => {
    const { getByAltText, getByText, debug } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
    expect(getByText('poison')).toBeInTheDocument();
    expect(getByText('grass')).toBeInTheDocument();
  });
  it('will call showDetails', () => {
    const { getByAltText, getByText, debug } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
    let bulbasaur = getByAltText('bulbasaur');
    fireEvent.click(bulbasaur);
    expect(mockShow).toBeCalledWith(mockPokemonList[0]);
  });
  it('can call release', () => {
    const { getByAltText, getByText, debug } = render(testWrapper);
    expect(getByAltText('bulbasaur')).toBeInTheDocument();
    expect(getByText('Release')).toBeInTheDocument();
    let release = getByText('Release');
    fireEvent.click(release);
    expect(mockDelete).toBeCalledWith(mockPokemonList[0]);
  });
});
