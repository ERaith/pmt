export const filterByName = (pokemon, filterSearch) => {
  let name = pokemon.name;
  filterSearch = RegExp(`^${filterSearch}`, 'i');
  let isName = filterSearch.test(name);
  return isName;
};

export const filterByType = (pokemon, filterSearch) => {
  let types = pokemon.types;
  filterSearch = `^${filterSearch}`;
  let isType = types.reduce((acc, type) => {
    acc = acc || type.type.name.match(filterSearch);
    return acc;
  }, false);
  return isType;
};

export const generalFilter = (pokemonList, nameFilter, typeFilter) => {
  if (nameFilter === '' && typeFilter === '') {
    return pokemonList;
  }
  let list = pokemonList.filter((pokemon) => {
    let isName = filterByName(pokemon, nameFilter);
    let isType = filterByType(pokemon, typeFilter);
    return isName && isType;
  });
  return list;
};
