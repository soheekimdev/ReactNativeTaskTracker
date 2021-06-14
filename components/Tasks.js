import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Task from './Task'
import uuid from 'react-native-uuid';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: uuid.v4(), text: 'Doctors Apppointment', day: 'Feb 5th at 2:30pm' },
    { id: uuid.v4(), text: 'Meeting at School', day: 'Feb 6th at 1:30pm' },
    { id: uuid.v4(), text: 'Food Shopping', day: 'Feb 5th at 2:30pm' },
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
