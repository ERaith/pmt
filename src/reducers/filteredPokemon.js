const defaultState = {
  filterPokemon: [],
};
const filterPokemon = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_FILTERED_LIST':
      return action.pokemon;
    default:
      return state;
  }
};

export default filterPokemon;