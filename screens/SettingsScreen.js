import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const theme = {
    background: isDarkMode ? '#1c1c1e' : '#ffffff',
    card: isDarkMode ? '#2c2c2e' : '#fff3e0',
    text: isDarkMode ? '#ffffff' : '#333',
    title: isDarkMode ? '#FFD60A' : '#FF9500',
    icon: isDarkMode ? '#FFD60A' : '#555',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Ionicons name="settings" size={70} color={theme.title} />

      <Text style={[styles.title, { color: theme.title }]}>Paramètres</Text>

   
      <View style={[styles.settingCard, { backgroundColor: theme.card }]}>
        <Ionicons name={isDarkMode ? "moon" : "sunny"} size={24} color={theme.icon} />
        <Text style={[styles.settingText, { color: theme.text }]}>
          Mode {isDarkMode ? "Sombre" : "Clair"}
        </Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>


      <View style={[styles.settingCard, { backgroundColor: theme.card }]}>
        <Ionicons name="notifications" size={24} color={theme.icon} />
        <Text style={[styles.settingText, { color: theme.text }]}>
          Notifications
        </Text>
        <Switch />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  settingCard: {
    width: '90%',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    elevation: 3
  },
  settingText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10
  }
});
