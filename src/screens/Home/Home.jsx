import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import getPokemons from "../../services/getPokemons";

function Home() {
  const { data, isLoading, isError } = useQuery(["getPokemos"], getPokemons);

  if (isLoading) return <Text>Loading</Text>; //useState
  if (isError) return <Text>Error</Text>; //useMemo

  const renderItem = ({ item }) => {
    return <PokemonDetail pokemon={item} />;
  };

  return (
    <View>
      <Text></Text>
      <FlatList renderItem={renderItem} data={data.results} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
