import React, { useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function AppBar({ title }) {
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.appBar}>
                <TouchableOpacity 
                    onPress={() => navigation.toggleDrawer()}
                    style={styles.menuButton}
                >
                    <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>
                
                <Text style={styles.title}>{title}</Text>
                
                <TouchableOpacity 
                    onPress={logout}
                    style={styles.logoutButton}
                >
                    <Ionicons name="log-out-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#007AFF',
    },
    appBar: {
        height: 60,
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    menuButton: {
        padding: 5,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    logoutButton: {
        padding: 5,
    },
});