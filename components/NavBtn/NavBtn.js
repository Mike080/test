import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import styles from './NavBtn.styles';

export default function NavBtn(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
