const BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON = 'pokemon';
const LIMIT = '?limit=151';
const TYPE = 'type/';

export const fetchPokemon = async () => {
  try {
    const response = await fetch(BASE_URL + POKEMON + LIMIT);
    const generalPokemonData = await response.json();
    const pokemonData = await Promise.all(
      generalPokemonData.results.map(async (pokemon) => {
        const detailedResponse = await fetch(pokemon.url);
        let cleanData = await detailedResponse.json();
        cleanData = {
          abilities: cleanData.abilities,
          sprites: cleanData.sprites,
          stats: cleanData.stats,
          types: cleanData.types,
          name: cleanData.name,
          id: cleanData.id,
        };
        return cleanData;
      }),
    );
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchImage = async (pokemonURL) => {
  let response = await fetch(pokemonURL);
  let pokemonImage = await response.json();
  return pokemonImage;
};

export const fetchTypes = async () => {
  try {
    let response = await fetch(BASE_URL + TYPE);
    let typeList = await response.json();
    typeList = typeList.results;
    typeList = await Promise.all(
      typeList.map(async (type) => {
        const detailedResponse = await fetch(type.url);
        let cleanData = await detailedResponse.json();
        let damageRelations = formatType(cleanData.damage_relations);
        cleanData = {
          id: cleanData.id,
          name: cleanData.name,
          damage_relations: damageRelations,
        };
        return cleanData;
      }),
    );
    return typeList.reduce((acc, val) => {
      acc[val.name] = val.damage_relations;
      return acc;
    }, {});
  } catch (error) {
    console.error(error);
  }
};

export const formatType = (damageRelation) => {
  const reference = { double: 2, half: 0.5, no: 0 };
  const keys = Object.keys(damageRelation);
  return keys.reduce(
    (acc, curval) => {
      const targetDamage = curval.split('_').pop();
      const damage = curval.split('_').shift();
      damageRelation[curval].forEach((type) => {
        acc[targetDamage][type.name] = reference[damage];
      });

      return acc;
    },
    { from: {}, to: {} },
  );
};
