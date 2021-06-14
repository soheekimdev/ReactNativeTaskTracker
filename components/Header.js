import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

const styles = StyleSheet.create({
  header: {
    height: 66,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#aaa',
    fontWeight: '600'
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    justifyContent: 'space-between',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});

export default Header;
