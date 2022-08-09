import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/İndex';

export default function Login({navigation}) {
  return (
    <View>
      <CustomButton
        text={'Giriş yap'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
