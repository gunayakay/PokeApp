import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

function Input({keyboardType, placeholder}) {
  return (
    <View style={styles.ınput_container}>
      <TextInput
        style={styles.ınput}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ınput_container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
});
export default Input;
