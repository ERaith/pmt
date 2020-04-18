export const getPokemonList = (pokemon) => ({
  type: 'POKEMON_LIST',
  pokemon,
});

export const filterPokemon = (pokemon) => ({
  type: 'POKEMON_FILTERED_LIST',
  pokemon,
});

export const getPokemonTeam = (pokemon) => ({
  type: 'TEAM',
  pokemon,
});
