import { combineReducers } from "redux";
import  pokemonList  from "./pokemonList";
import  filteredPokemon  from "./filteredPokemon";
import  pokemonTeam  from "./pokemonTeam";

export const rootReducer = combineReducers({
  pokemonList,
  pokemonTeam,
  filteredPokemon,
});