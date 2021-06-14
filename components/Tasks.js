import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Task from './Task'

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} deleteTask={deleteTask} />}
    />
  );
};

const styles = StyleSheet.create({
  tasks: {
    
  },
});

export default Tasks;
