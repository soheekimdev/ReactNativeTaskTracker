import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ title }) => {
  return (
    <View style={styles.task}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    
  },
});

export default Task;
