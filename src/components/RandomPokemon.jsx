import React from "react";
import { Box, Image } from "native-base";

function RandomPokemon({}) {
  return (
    <Box justifyContent="center" alignItems="center">
      <Image
        source={{
          uri: data.sprites.other["official-artwork"].front_default,
        }}
        alt="image"
        height="100"
        width="100"
      />
    </Box>
  );
}

export default RandomPokemon;
