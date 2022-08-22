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
import RandomPokemon from "../../components/RandomPokemon";
import Loading from "../../components/loading";

function Home({ navigation }) {
  const randomId = generateRandomPokemon(1, 1156);
  const { data, isLoading, isError } = useQuery(
    ["todayPokemon"],
    async () => {
      const response = await getPokemonDetail(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      return response;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false, // ekrana geri döndüğünde tekrardan fetch işlemini çalştrma
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24, // cacheTime ' n staleTime'dan büyük olmaması önerilir çünkü baat veriyi cachede tutmak saçma
    }
  );

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
