import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import AppBar from "../components/AppBar";

export default function TodoDetailsScreen({ route }) {
    const { id, title } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Détails" />
            
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.id}>ID : {id}</Text>
                <Text style={styles.description}>
                    Détails supplémentaires sur la tâche "{title}".
                </Text>
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
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    id: {
        fontSize: 20,
        color: '#007AFF',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
});