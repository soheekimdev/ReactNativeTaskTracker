import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddTask = ({ title, addTask }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.container}>
      <TextInput placeholder='Add Task...' style={styles.input} onChangeText={onChange} />
      <TextInput placeholder='Add Day & Time' style={styles.input} onChangeText={onChange} />
      
      <TouchableOpacity style={styles.btn} onPress={() => addTask(text)} >
        <Text style={styles.btnText}><Icon name='plus' size={20} />Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    borderRadius: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default AddTask;
