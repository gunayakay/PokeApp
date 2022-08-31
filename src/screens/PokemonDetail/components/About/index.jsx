import React from "react";
import { Center, Text } from "native-base";
import PropTypes from "prop-types";
import useAboutInfo from "../../../../hooks/useAboutInfo";
import extractPokemonId from "../../../../utils/extractPokemonId";
import Loading from "../../../../components/loading";

function About({ pokemonId }) {
  extractPokemonId(pokemonId);
  const { data, isLoading, isError } = useAboutInfo(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
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
      <Text>{data}</Text>
    </Center>
  );
}

About.propTypes = {
  pokemonId: PropTypes.string.isRequired,
};
export default About;
