import { Image, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getPokemonsDetail from "../../services/getPokemonDetail";

function PokemonDetail({ pokemon }) {
  const { data, isLoading, isError } = useQuery(
    ["pokemonDetail", pokemon.url],
    async () => {
      const data = await getPokemonsDetail(pokemon.url);
      return data;
    }
  );

  if (isLoading) return <Text>Loading</Text>;
  if (isError) return <Text>Error</Text>;

  console.log(data.sprites.other["official-artwork"].front_default);

  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Image
        source={{
          uri: data.sprites.other["official-artwork"].front_default,
        }}
        resizeMode="cover"
        style={{ height: 100, width: 100 }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({});
export default PokemonDetail;
