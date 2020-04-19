const defaultState = {details:{},show:false};
const details = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      if(state.details === action.pokemonDetails){
        return defaultState
      }
      return {details:action.pokemonDetails,show:true}
    default:
      return state;
  }
};

export default details;