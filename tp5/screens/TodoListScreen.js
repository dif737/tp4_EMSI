import { useState, useEffect, useContext } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    StyleSheet,
    SafeAreaView 
} from "react-native";
import AppBar from "../components/AppBar";
import { useNavigation } from "@react-navigation/native";

export default function TodoListScreen() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        console.log("Chargement des tâches...");
        
        setTimeout(() => {
            setTodos([
                { id: 1, title: "Faire les courses" },
                { id: 2, title: "Sortir le chien" },
                { id: 3, title: "Coder une app RN" },
                { id: 4, title: "Réviser React Native" },
                { id: 5, title: "Faire du sport" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <AppBar title="Mes tâches" />
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Chargement...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Mes tâches" />
            
            <View style={styles.content}>
                <FlatList 
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.todoItem}
                            onPress={() => navigation.navigate('Details', {
                                id: item.id,
                                title: item.title
                            })}
                        >
                            <Text style={styles.todoTitle}>{item.title}</Text>
                            <Text style={styles.todoId}>ID: {item.id}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        fontSize: 20,
        color: '#666',
    },
    todoItem: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    todoId: {
        fontSize: 14,
        color: '#666',
    },
});