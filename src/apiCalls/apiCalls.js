const BASE_URL = 'http://pokeapi.co/api/v2/';
const POKEMON = 'pokemon';
const LIMIT = '?limit=151';

export const fetchPokemon = async () => {
  const response = await fetch(BASE_URL + POKEMON + LIMIT);
  const generalPokemonData = await response.json();
  const pokemonData = await Promise.all(
    generalPokemonData.results.map(async (pokemon) => {
      const detailedResponse = await fetch(pokemon.url);
      return detailedResponse.json();
    }),
  );
  return pokemonData;
};

export const fetchImage = async (pokemonURL) => {
  let response = await fetch(pokemonURL);
  let pokemonImage = await response.json();
  return pokemonImage;
};