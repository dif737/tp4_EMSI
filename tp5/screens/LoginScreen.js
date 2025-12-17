import { useState, useContext } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet,
    SafeAreaView 
} from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
    const [name, setName] = useState("");
    const { login } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Connexion</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Votre nom"
                    value={name}
                    onChangeText={setName}
                />
                
                <Button 
                    title="Se connecter" 
                    onPress={() => login(name)} 
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
        justifyContent: "center",
        padding: 20,
    },
    title: { 
        fontSize: 28, 
        marginBottom: 20, 
        textAlign: "center",
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
        padding: 12,
        borderRadius: 6,
        backgroundColor: 'white',
        fontSize: 16,
    },
});