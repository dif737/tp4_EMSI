import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider, { AuthContext } from './context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from './screens/LoginScreen';

function RootNavigator() {
    const { user } = useContext(AuthContext);
    return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </AuthProvider>
        </SafeAreaProvider>
    );
}