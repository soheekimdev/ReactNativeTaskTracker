import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Task from './Task'

const Tasks = () => {
  return (
    <View style={styles.tasks}>
      <Task title='Todo 1'/>
      <Task title='Todo 2'/>
      <Task title='Todo 3'/>
    </View>
  );
};

const styles = StyleSheet.create({
  tasks: {
    
  },
});

export default Tasks;
