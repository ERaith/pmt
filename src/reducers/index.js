import { combineReducers } from 'redux';
import pokemonList from './pokemonList';
import filteredPokemon from './filteredPokemon';
import pokemonTeam from './pokemonTeam';
import details from './details';
import typeDetails from './types';

export const rootReducer = combineReducers({
  pokemonList,
  pokemonTeam,
  filteredPokemon,
  details,
  typeDetails
});
