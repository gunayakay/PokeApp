async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  return data;
}

export default getPokemons;
