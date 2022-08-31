import React from "react";
import { Center, Text, Progress, Box } from "native-base";
import PropTypes from "prop-types";
import useAboutInfo from "../../../../hooks/useAboutInfo";
import extractPokemonId from "../../../../utils/extractPokemonId";
import Loading from "../../../../components/loading";

function About({ url }) {
  const pokemonId = extractPokemonId(url);
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
      <Box bg="red" flex={1}>
        <Text>{data.flavor_text_entries[0].flavor_text}</Text>
        <Box marginBottom={2}>
          <Text>Base Happines</Text>
          <Progress colorScheme="emerald" value={data.base_happiness} />
        </Box>
        <Box>
          <Text>Capture Rate</Text>
          <Progress colorScheme="emerald" value={data.capture_rate} />
        </Box>
      </Box>
    </Center>
  );
}

About.propTypes = {
  url: PropTypes.string.isRequired,
};
export default About;
