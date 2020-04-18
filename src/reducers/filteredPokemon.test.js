import filteredPokemon from '../reducers/filteredPokemon';
import mockPokemonList from '../../public/mockTestFiles';

describe('Reducer: filteredPokemon', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {
      filterPokemon: [],
    };

    // Execution
    const result = filteredPokemon(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should update filtered pokemon', () => {
    // Setup
    const expected = mockPokemonList;
    const action = { type: 'POKEMON_FILTERED_LIST', pokemon: mockPokemonList };

    // Execution
    const result = filteredPokemon(undefined, action);

    // Expectation
    expect(result).toEqual(expected);
  });
});