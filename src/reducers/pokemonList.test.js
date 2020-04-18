import pokemonList from '../reducers/pokemonList';
import mockPokemonList from '../../public/mockTestFiles';

describe('Reducer: pokemonList', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {
      pokemonList: [],
    };

    // Execution
    const result = pokemonList(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should update the pokemonlist', () => {
    // Setup
    const expected = mockPokemonList;
    const action = { type: 'POKEMON_LIST', pokemon: mockPokemonList };

    // Execution
    const result = pokemonList(undefined, action);

    // Expectation
    expect(result).toEqual(expected);
  });
});