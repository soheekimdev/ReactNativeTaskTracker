import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Task = ({ task }) => {
  return (
    <TouchableOpacity style={styles.task}>
      <View style={styles.taskView}>
        <Text style={styles.taskText}>{task.text}</Text>
        {/* <Icon name="remove" size={20} color="firebrick" /> */}
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
  taskView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  }
});

export default Task;
