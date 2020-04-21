import {formatType} from './apiCalls';
import { mockTypes } from '../../public/mockTestFiles';


describe('formatting', () => {
  it('should type of POKEMON_LIST and a correct payload', () => {
    const expectedAction = {
         "from":{
             "fighting": 2,
             "ghost": 0,
           },
           "to": {
             "ghost": 0,
             "rock": 0.5,
             "steel": 0.5,
           },
    };

    const result = formatType(mockTypes.damage_relations);

    expect(result).toEqual(expectedAction);
  });
});