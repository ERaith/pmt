export const pokemonfilter = (pokemonList, filterSearch) => {
  let list =  pokemonList.filter((pokemon) => {
    let name = pokemon.name;
    return (name.includes(filterSearch))
  });
  return list;
};
