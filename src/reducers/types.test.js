import types from '../reducers/types';
import {mockTypes} from '../../public/mockTestFiles';

describe('Reducer: types', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {};

    // Execution
    const result = types(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should update the types', () => {
    // Setup
    const expected = mockTypes;
    const action = { type: 'LOAD_TYPES', typeDetails: mockTypes };

    // Execution
    const result = types(undefined, action);

    // Expectation
    expect(result).toEqual(expected);
  });
});