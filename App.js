import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AuthProvider, { AuthContext } from './context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Tâches" component={AppDrawer} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <TabNavigator /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}