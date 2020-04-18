import { combineReducers } from "redux";
import  pokemonList  from "./pokemonList";
import  filteredPokemon  from "./filteredPokemon";

export const rootReducer = combineReducers({
  pokemonList,
  filteredPokemon,
});