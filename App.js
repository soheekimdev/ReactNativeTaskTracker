import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Task Tracker' />
      <Tasks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
