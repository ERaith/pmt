import savedTeams from '../reducers/savedTeams';
import {
  mocksavedTeams,
  mockTeamOne,
  mockTeamTwo,
} from '../../public/mockTestFiles';

describe('Reducer: pokemonList', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = savedTeams(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should update the pokemonlist', () => {
    // Setup
    const expected = mockTeamOne;
    const actionOne = {
      type: 'SAVE_TEAM',
      pokemonTeam: mockTeamOne.members,
      teamName: mockTeamOne.teamName,
    };

    // Execution
    const resultOne = savedTeams(undefined, actionOne);

    // Expectation
    expect(resultOne).toEqual([expected]);
  });

  it('should remove from the pokemonlist', () => {
    // Setup
    const expected = [mockTeamTwo];
    const action = { type: 'REMOVE_TEAM', teamName: 'Team Blue' };

    // Execution
    const result = savedTeams(mocksavedTeams, action);

    // Expectation
    expect(result).toEqual(expected);
  });
  it('should not add an additional existing team', () => {
    // Setup
    const expected = [mockTeamTwo, mockTeamOne];
    const actionOne = {
      type: 'SAVE_TEAM',
      pokemonTeam: mockTeamOne.members,
      teamName: mockTeamOne.teamName,
    };

    // Execution
    const resultOne = savedTeams(mocksavedTeams, actionOne);

    // Expectation
    expect(resultOne).toEqual(expected);
  });
});
