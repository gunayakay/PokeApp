import { FlatList, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Pokebox from "./components/Pokebox";
import getPokemons from "../../services/getPokemons";
import Loading from "../../components/loading";

function Pokedex() {
  const { data, isLoading, isError } = useQuery(["getPokemos"], getPokemons);
  if (isLoading) return <Loading />; // useState
  if (isError) return <Text>Error</Text>; // useMemo

  const renderItem = ({ item }) => <Pokebox pokemon={item} />;

  return (
    <View>
      <FlatList renderItem={renderItem} data={data.results} numColumns={2} />
    </View>
  );
}

// const styles = StyleSheet.create({});
export default Pokedex;
