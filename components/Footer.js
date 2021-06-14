import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Copyright &copy; 2021</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 56,
  },
  footerText: {
    textAlign: 'center',
  },
});

export default Footer;
