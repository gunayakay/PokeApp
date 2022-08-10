import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

function PokemonDetail({ pokemon }) {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
export default PokemonDetail;
