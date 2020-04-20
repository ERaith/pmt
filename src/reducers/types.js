const defaultState = {};
const typeDetails = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
      return action.typeDetails;
    default:
      return state;
  }
};

export default typeDetails;