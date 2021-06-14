import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  // Toggle Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <TextInput placeholder='Add Task...' style={styles.input} onChangeText={onChange} />
      <TextInput placeholder='Add Day & Time' style={styles.input} onChangeText={onChange} />
      <View style={styles.switchWrap}>
        <Text style={styles.switchText}>Set Reminder</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#555", true: "green" }}
          thumbColor={isEnabled ? "#fff" : "#fff"}
          ios_backgroundColor="#eee"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => addTask(text)} >
        <Text style={styles.btnText}><Icon name='plus' size={16} style={styles.btnIcon} />Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingBottom: 16,
    marginBottom: 16,
  },
  input: {
    height: 50,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    marginBottom: 8,
  },
  switchWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  switchText: {
    fontSize: 16,
    paddingLeft: 8,
  },
  switch: {
    margin: 8,
  },
  btn: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 5,
  },
  btnIcon: {
    
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default AddTask;
