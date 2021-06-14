import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green'
  },
  text: {
    color: '#fff'
  }
});

export default Button;
