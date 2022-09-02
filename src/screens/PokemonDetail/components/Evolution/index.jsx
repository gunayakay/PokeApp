import React from "react";
import { Center, Text, Box } from "native-base";
import PropTypes from "prop-types";
import useEvolution from "../../../../hooks/useEvolution";
import extractPokemonId from "../../../../utils/extractPokemonId";
import Loading from "../../../../components/loading";

function Evolution({ url }) {
  const pokemonId = extractPokemonId(url);
  const { data, isLoading, isError } = useEvolution(
    `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`
  );
  console.log(data);
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  return (
    <Center
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <Box bg="red" flex={1}>
        <Text></Text>
      </Box>
    </Center>
  );
}

Evolution.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Evolution;
