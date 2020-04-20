const defaultState = [];
const pokemonTeam = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEAM_LIST':
      return [...state,action.teamMember];
    case 'REMOVE_POKEMON':
      let updatedState = state.filter(element=>element.teamID !== action.releasedPokemon.teamID)
      return updatedState;
    default:
      return state;
  }
};

export default pokemonTeam;