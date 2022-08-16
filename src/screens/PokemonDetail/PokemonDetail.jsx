import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Stack,
  Center,
  HStack,
  AspectRatio,
  Heading,
  Badge,
  VStack,
} from "native-base";
import getPokemonsDetail from "../../services/getPokemonDetail";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function PokemonDetail({ pokemon, navigation }) {
  const { data, isLoading, isError } = useQuery(
    ["pokemonDetail", pokemon.url],
    async () => {
      const data = await getPokemonsDetail(pokemon.url);
      return data;
    }
  );

  if (isLoading) return <Text>Loading</Text>;
  if (isError) return <Text>Error</Text>;

  return (
    <Box margin={2} alignItems="center" flex="1">
      <Box
        paddingTop="4"
        paddingBottom="2"
        paddingX="2"
        width="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Heading size="md">{capitalizeFirstLetter(pokemon.name)}</Heading>
        <Box>
          <HStack space={2}>
            <VStack>
              {data.types.map((item) => (
                <Badge colorScheme="danger">{item.type.name}</Badge>
              ))}
            </VStack>
            <AspectRatio w="50%" ratio={1 / 1}>
              <Image
                source={{
                  uri: data.sprites.other["official-artwork"].front_default,
                }}
                alt="image"
              />
            </AspectRatio>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

// const styles = StyleSheet.create({});
export default PokemonDetail;
