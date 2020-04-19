const BASE_URL = 'http://pokeapi.co/api/v2/';
const POKEMON = 'pokemon';
const LIMIT = '?limit=151';

export const fetchPokemon = async () => {
  const response = await fetch(BASE_URL + POKEMON + LIMIT);
  const generalPokemonData = await response.json();
  const pokemonData = await Promise.all(
    generalPokemonData.results.map(async (pokemon) => {
      const detailedResponse = await fetch(pokemon.url);
      let cleanData = await detailedResponse.json();
      cleanData = {
        abilities:cleanData.abilities,
        sprites:cleanData.sprites,
        stats:cleanData.stats,
        types:cleanData.types,
        name:cleanData.name,
      }
      return cleanData;
    }),
  );
  return pokemonData;
};

export const fetchImage = async (pokemonURL) => {
  let response = await fetch(pokemonURL);
  let pokemonImage = await response.json();
  return pokemonImage;
};