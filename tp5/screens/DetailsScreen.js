import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route }) {
  const id = route.params?.id;

  return (
    <View style={styles.container}>

      <Ionicons name="information-circle" size={70} color="#34C759" />

      <Text style={styles.title}>Détails de l’élément</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Identifiant reçu :</Text>
        <Text style={styles.cardValue}>{id}</Text>
      </View>

      <Text style={styles.footer}>
        Cet écran affiche des informations transmises depuis la page d’accueil.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#34C759'
  },
  card: {
    backgroundColor: '#e8f5e9',
    width: '90%',
    padding: 20,
    borderRadius: 12,
    marginTop: 25,
    elevation: 4
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#34C759'
  },
  footer: {
    marginTop: 20,
    color: '#555',
    textAlign: 'center'
  }
});
