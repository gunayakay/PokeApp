import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';

function CustomButton({onPress, text}) {
  return (
    <View>
      <TouchableOpacity style={styles.button_container} onPress={onPress}>
        <Text style={styles.button_text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
