import * as actions from "./index";
import mockPokemonList from '../../public/mockTestFiles'

describe("actions", () => {
  it("should have a type of LOGIN_USER and a correct payload", () => {
    const expectedAction = {
      type: "POKEMON_LIST",
      pokemon: mockPokemonList
    };

    const result = actions.getPokemonList(mockPokemonList);

    expect(result).toEqual(expectedAction);
  });

});
