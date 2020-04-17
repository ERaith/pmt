import * as actions from './index';
import mockPokemonList from '../../public/mockTestFiles';

describe('actions', () => {
  it('should type of POKEMON_LIST and a correct payload', () => {
    const expectedAction = {
      type: 'POKEMON_LIST',
      pokemon: mockPokemonList,
    };

    const result = actions.getPokemonList(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });
});
