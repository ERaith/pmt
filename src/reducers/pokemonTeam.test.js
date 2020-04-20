import pokemonTeam from '../reducers/pokemonTeam';
import { mockPokemonList, mockpokemonTeam } from '../../public/mockTestFiles';

describe('Reducer: pokemonTeam', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = pokemonTeam(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should update the Pokemon team', () => {
    // Setup
    let pokemon = mockPokemonList[0];
    const expected = [pokemon];
    const action = { type: 'TEAM_LIST', teamMember: pokemon };

    // Execution
    const result = pokemonTeam(undefined, action);

    // Expectation
    expect(result).toEqual(expected);
  });
  it('should remove a pokemon', () => {
    // Setup
    let pokemon = mockPokemonList[0];
    pokemon['teamID'] = 1;
    const expected = [];
    const action = { type: 'REMOVE_POKEMON', releasedPokemon: pokemon };

    // Execution
    const result = pokemonTeam([pokemon], action);

    // Expectation
    expect(result).toEqual(expected);
  });
  it('should load a team', () => {
    // Setup
    const expected = mockpokemonTeam;
    const action = { type: 'GOTO_TEAM', loadedTeam: mockpokemonTeam };

    // Execution
    const result = pokemonTeam(undefined, action);

    // Expectation
    expect(result).toEqual(expected);
  });
});
