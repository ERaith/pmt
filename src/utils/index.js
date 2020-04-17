export const nameFilter = (pokemonList, filterSearch) => {
  if(filterSearch ===""){return pokemonList}
  filterSearch = RegExp(`^${filterSearch}`,'i')
  let list =  pokemonList.filter((pokemon) => {
    let name = pokemon.name;
    return (filterSearch.test(name))
  });
  return list;
}
;
export const typeFilter = (pokemonList, filterSearch) => {
  if(filterSearch ===""){return pokemonList}
  filterSearch = `^${filterSearch}`
  let list =  pokemonList.filter((pokemon) => {
    let name = pokemon.name;
    return (name.match(filterSearch))
  });
  return list;
};
