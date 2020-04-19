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

export const showDetails = (pokemonDetails) => ({
  type: 'SHOW_DETAILS',
  pokemonDetails,
});

export const loadTypes = (typeDetails) => ({
  type: 'LOAD_TYPES',
  typeDetails,
});
