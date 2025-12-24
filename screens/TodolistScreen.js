import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

export default function TodolistScreen({ navigation }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(addTodo({ id: 1, title: 'Faire les courses' }));
      dispatch(addTodo({ id: 2, title: 'Sortir le chien' }));
      dispatch(addTodo({ id: 3, title: 'Coder une app RN' }));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes tâches</Text>
      <FlatList
        data={todos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsTâche', item)}
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});