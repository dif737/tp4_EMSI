import { useContext } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AppBar from "../components/AppBar";

export default function ProfileScreen() {
    const { user, logout } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Profil" />
            
            <View style={styles.content}>
                <View style={styles.profileCard}>
                    <Text style={styles.welcome}>Bienvenue</Text>
                    <Text style={styles.username}>{user?.username}</Text>
                    <Text style={styles.email}>utilisateur@example.com</Text>
                    
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoTitle}>Informations du compte</Text>
                        <Text style={styles.info}>Membre depuis: Janvier 2024</Text>
                        <Text style={styles.info}>Statut: Actif</Text>
                    </View>
                    
                    <Button 
                        title="Se déconnecter" 
                        onPress={logout}
                        color="#FF3B30"
                    />
                </View>
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
    profileCard: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    welcome: {
        fontSize: 24,
        color: '#666',
        marginBottom: 10,
    },
    username: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#999',
        marginBottom: 30,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
});