import { FlatList, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import PokemonDetail from "../PokemonDetail/PokemonDetail";
import getPokemons from "../../services/getPokemons";

function Home() {
  const { data, isLoading, isError } = useQuery(["getPokemos"], getPokemons);

  if (isLoading) return <Text>Loading</Text>; // useState
  if (isError) return <Text>Error</Text>; // useMemo

  const renderItem = ({ item }) => <PokemonDetail pokemon={item} />;

  return (
    <View>
      <FlatList renderItem={renderItem} data={data.results} numColumns={2} />
    </View>
  );
}

// const styles = StyleSheet.create({});
export default Home;
