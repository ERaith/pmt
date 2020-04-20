export const loadPokemonList = (pokemon) => ({
  type: 'POKEMON_LIST',
  pokemon,
});

export const filterPokemon = (pokemon) => ({
  type: 'POKEMON_FILTERED_LIST',
  pokemon,
});

export const addPokemonToTeam = (teamMember) => ({
  type: 'TEAM_LIST',
  teamMember,
});
export const removePokemonFromTeam = (releasedPokemon) => ({
  type: 'REMOVE_POKEMON',
  releasedPokemon,
});

export const showDetails = (pokemonDetails) => ({
  type: 'SHOW_DETAILS',
  pokemonDetails,
});

export const loadTypes = (typeDetails) => ({
  type: 'LOAD_TYPES',
  typeDetails,
});

export const saveTeam = (pokemonTeam,teamName) => ({
  type: 'SAVE_TEAM',
  pokemonTeam,
  teamName
});

export const removeTeam = (teamName) => ({
  type: 'REMOVE_TEAM',
  teamName
});

export const goToTeam = (loadedTeam) => ({
  type: 'GOTO_TEAM',
  loadedTeam
});
