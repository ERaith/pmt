const defaultState = {info:{},show:false};
const details = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      if(state.info === action.pokemonDetails){
        return defaultState
      }
      return {info:action.pokemonDetails,show:true}
    default:
      return state;
  }
};

export default details;