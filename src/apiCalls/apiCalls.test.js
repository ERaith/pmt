import {formatType} from './apiCalls';
import { mockAPITypes } from '../../public/mockTestFiles';


describe('formatting', () => {
  it('format the type data', () => {
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

    const result = formatType(mockAPITypes.damage_relations);

    expect(result).toEqual(expectedAction);
  });
});