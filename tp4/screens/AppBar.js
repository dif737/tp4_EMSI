import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>TP 4 REACT NATIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
