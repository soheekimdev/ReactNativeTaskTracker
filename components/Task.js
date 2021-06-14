import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ task }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{task.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
});

export default Task;
