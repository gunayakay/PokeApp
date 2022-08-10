import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function Home() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/name')
      .then(res => res.json)
      .then(response => {
        setPokemons(response.pokemons);
      });
  }, []);
  const renderItem = ({item}) => {
    <PokemonDetail pokemon={item} />;
  };

  return (
    <View>
      <Text>Home</Text>
      <FlatList renderItem={renderItem} data={pokemons} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
