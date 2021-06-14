import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Task = ({ task, deleteTask }) => {

  return (
    <TouchableOpacity style={[styles.task, styles.reminder]}>
      <View style={styles.taskView}>
        <Text style={styles.taskText}>{task.text}</Text>
        <Icon name="remove" style={styles.taskIcon} onPress={() => deleteTask(task.id)} />
      </View>
      <View>
        <Text>{task.day}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  reminder: {
    borderLeftColor: '#444',
    borderLeftWidth: 6,
  },
  taskView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
    fontWeight: '500',
  },
  taskIcon: {
    fontSize: 20,
    color: 'red',
  }
});

export default Task;
