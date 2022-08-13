function extractPokemonId(url) {
  const splittedUrl = url.split("/");
  return splittedUrl[6];
}

export default extractPokemonId;

// @todo: implement string logic
