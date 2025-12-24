import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TodolistScreen from '../screens/TodolistScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ListeTâches" component={TodolistScreen} />
      <Drawer.Screen name="DetailsTâche" component={TodoDetailsScreen} />
      <Drawer.Screen name="Profil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}