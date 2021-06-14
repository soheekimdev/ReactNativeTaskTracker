import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: uuid.v4(), text: 'Doctors Apppointment', day: 'Feb 5th at 2:30pm' },
    { id: uuid.v4(), text: 'Meeting at School', day: 'Feb 6th at 1:30pm' },
    { id: uuid.v4(), text: 'Food Shopping', day: 'Feb 5th at 2:30pm' },
  ]);

  const deleteTask = (id) => {
    setTasks(prevItems => {
      return prevItems.filter(task => task.id != id);
    });
  }

  const addTask = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter a task', { text: 'OK' });
    } else {
      setTasks(prevTasks  => {
        return [{id: uuid.v4(), text}, ...prevTasks];
      }); 
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Task Tracker' />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
  },
});

export default App;
