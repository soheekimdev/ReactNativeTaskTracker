import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Button text='Add' />
    </View>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'left',
  },
});

export default Header;
