const defaultState = [];
const savedTeams = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_TEAM':
      let team = { teamName: action.teamName, members: action.pokemonTeam };

      let idx = state.findIndex(
        (existingTeam) => existingTeam.teamName == team.teamName,
      );

      if (idx != -1) {
        state.splice(idx, 1);
      }
      return [...state, team];
    case 'REMOVE_TEAM':
      let removedIdx = state.findIndex(
        (existingTeam) => existingTeam.teamName == action.teamName,
      );
      state.splice(removedIdx, 1);
      return [...state];
    default:
      return state;
  }
};

export default savedTeams;
