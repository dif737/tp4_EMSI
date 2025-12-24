import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Ionicons name="home" size={70} color="#007AFF" />

      <Text style={styles.title}>Bienvenue !</Text>
      <Text style={styles.subtitle}>
       Tp realisé par AYOUB DIF (4IIR G6)
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Details", { id: 42 })}
      >
        <Ionicons name="arrow-forward" size={20} color="#fff" />
        <Text style={styles.buttonText}>Voir les détails</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#007AFF'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#555'
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
