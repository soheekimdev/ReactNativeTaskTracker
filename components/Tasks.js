import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Task from './Task'
import uuid from 'react-native-uuid';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: uuid.v4(), text: 'Todo 1' },
    { id: uuid.v4(), text: 'Todo 2' },
    { id: uuid.v4(), text: 'Todo 3' },
    { id: uuid.v4(), text: 'Todo 4' },
  ]);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} />}
    />
  );
};

const styles = StyleSheet.create({
  tasks: {

  },
});

export default Tasks;
