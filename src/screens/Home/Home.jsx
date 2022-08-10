import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function Home() {
  const response = useQuery(["getPokemos"], async () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  });
  const renderItem = ({ item }) => {
    return <PokemonDetail pokemon={item} />;
  };

  return (
    <View>
      <Text></Text>
      <FlatList renderItem={renderItem} data={pokemons} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
