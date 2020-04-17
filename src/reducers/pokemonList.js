const defaultState = {
  pokemonList: [],
};
const pokemonList = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST':
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonList;