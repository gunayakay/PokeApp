import React from "react";
import { Box, Image, Text } from "native-base";

function RandomPokemon({ image, name }) {
  return (
    <Box
      backgroundColor="black"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>{name}</Text>
      <Image
        source={{
          uri: image,
        }}
        alt="image"
        height="200"
        width="200"
        color="white"
        opacity={1}
      />
    </Box>
  );
}

export default RandomPokemon;
