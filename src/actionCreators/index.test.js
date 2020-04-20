import * as actions from './index';
import mockPokemonList from '../../public/mockTestFiles';

describe('actions', () => {
  it('should type of POKEMON_LIST and a correct payload', () => {
    const expectedAction = {
      type: 'POKEMON_LIST',
      pokemon: mockPokemonList,
    };

    const result = actions.loadPokemonList(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of POKEMON_FILTERED_LIST and a correct payload', () => {
    const expectedAction = {
      type: 'POKEMON_FILTERED_LIST',
      pokemon: mockPokemonList,
    };

    const result = actions.filterPokemon(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of TEAM_LIST and a correct payload', () => {
    const expectedAction = {
      type: 'TEAM_LIST',
      teamMember: mockPokemonList,
    };

    const result = actions.addPokemonToTeam(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of REMOVE_POKEMON and a correct payload', () => {
    const expectedAction = {
      type: 'REMOVE_POKEMON',
      realeasedPokemon: mockPokemonList,
    };

    const result = actions.removePokemonFromTeam(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of SHOW_DETAILS and a correct payload', () => {
    const expectedAction = {
      type: 'SHOW_DETAILS',
      pokemonDetails: mockPokemonList,
    };

    const result = actions.showDetails(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of LOAD_TYPES and a correct payload', () => {
    const expectedAction = {
      type: 'LOAD_TYPES',
      typeDetails: mockPokemonList,
    };

    const result = actions.loadTypes(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
  it('should type of SAVE_TEAM and a correct payload', () => {
    const expectedAction = {
      type: 'SAVE_TEAM',
      pokemonTeam: mockPokemonList,
      teamName: 'Team Rocket',
    };

    const result = actions.saveTeam(mockPokemonList, 'Team Rocket');

    expect(result).toEqual(expectedAction);
  });
  it('should type of REMOVE_TEAM and a correct payload', () => {
    const expectedAction = {
      type: 'REMOVE_TEAM',
      teamName: 'Team Rocket',
    };

    const result = actions.removeTeam('Team Rocket');

    expect(result).toEqual(expectedAction);
  });
  it('should type of GOTO_TEAM and a correct payload', () => {
    const expectedAction = {
      type: 'GOTO_TEAM',
      loadedTeam: mockPokemonList,
    };

    const result = actions.goToTeam(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
});
