/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import CBox from "./components/cBox";
import SearchBar from "../../components/SearchBar";
import RandomPokemon from "../../components/RandomPokemon";
import Loading from "../../components/loading";
import usegetPokemon from "../../hooks/usegetPokemon";
import generateRandomPokemon from "../../utils/generateRandomPokemon";

function Home({ navigation, route }) {
  const randomId = generateRandomPokemon(1, 1156);
  const { url } = route.params;
  const { data, isLoading, isError } = usegetPokemon(url);

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  return (
    <Box flex="1" paddingX="5" bgColor="white">
      <SearchBar placeholder="Search Pokemon, Move, Ability etc." />
      <VStack>
        <HStack space={3} justifyContent="center">
          <CBox
            color={["#e53935", "#e35d5b"]}
            title="Pokedex"
            onPress={() => {
              navigation.navigate("Pokedex");
            }}
          />
          <CBox
            color={["#76b852", "#8DC26F"]}
            title="Locations"
            onPress={() => {
              navigation.navigate("Locations");
            }}
          />
        </HStack>
        <HStack space={3} justifyContent="center">
          <CBox
            color={["#457fca", "#5691c8"]}
            title="Abilities"
            onPress={() => {
              navigation.navigate("Abilities");
            }}
          />
          <CBox
            color={["#ffb347", "#ffcc33"]}
            title="Moves"
            onPress={() => {
              navigation.navigate("Moves");
            }}
          />
        </HStack>
        <Box alignItems="center" justifyContent="center">
          <Text fontSize="28">What Today's Pokemon</Text>
        </Box>
        <RandomPokemon
          id={randomId}
          // name={data.results.name}
          image={data.sprites.other["official-artwork"].front_default}
        />
      </VStack>
    </Box>
  );
}
export default Home;
