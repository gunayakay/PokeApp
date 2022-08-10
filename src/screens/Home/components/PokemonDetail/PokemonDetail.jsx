import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

function PokemonDetail({pokemon}) {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/name')
      .then(res => res.json)
      .then(response => {
        setPokemons(response.pokemons);
      });
  }, []);

  return (
    <View>
      <Text>PokemonDetail</Text>
      <Text>{pokemons.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
export default PokemonDetail;
