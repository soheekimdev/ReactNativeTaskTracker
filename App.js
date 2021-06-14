import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Task from './components/Task';
import uuid from 'react-native-uuid';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: uuid.v4(), text: 'Todo 1' },
    { id: uuid.v4(), text: 'Todo 2' },
    { id: uuid.v4(), text: 'Todo 3' },
    { id: uuid.v4(), text: 'Todo 4' },
  ]);

  return (
    <View style={styles.container}>
      <Header title='Task Tracker' />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task task={item} />}
      />
      {/* <Button title='Add'></Button> */}
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
