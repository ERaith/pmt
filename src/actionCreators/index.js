export const loadPokemonList = (pokemon) => ({
  type: 'POKEMON_LIST',
  pokemon,
});

export const filterPokemon = (pokemon) => ({
  type: 'POKEMON_FILTERED_LIST',
  pokemon,
});

export const addPokemonToTeam = (pokemon) => ({
  type: 'TEAM_LIST',
  pokemon,
});
