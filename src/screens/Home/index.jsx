/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { useQuery } from "@tanstack/react-query";
import CBox from "./components/cBox";
import SearchBar from "../../components/SearchBar";
import generateRandomPokemon from "../../utils/generateRandomPokemon";

import getPokemonDetail from "../../services/getPokemonDetail";
import RandomPokemon from "../../components/randomPokemon";

function Home({ navigation }) {
  const { data, isLoading, isError } = useQuery(["todayPokemon"], async () => {
    const response = await getPokemonDetail(
      `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon(1, 1156)}`
    );
    return response;
  });

  if (isLoading) return <Text>Loading</Text>;
  if (isError) return <Text>Error</Text>;
  return (
    <Box flex="1">
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
        <RandomPokemon />
      </VStack>
    </Box>
  );
}
export default Home;
