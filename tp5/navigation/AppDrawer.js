import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./AppStack";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#007AFF' },
                headerTintColor: '#fff',
                drawerActiveTintColor: '#007AFF',
                drawerInactiveTintColor: 'gray',
                drawerStyle: { backgroundColor: '#f8f8f8' },
            }}
        >
            <Drawer.Screen 
                name="Accueil" 
                component={AppStack}
                options={{ title: "Tâches" }}
            />
            <Drawer.Screen 
                name="Profil" 
                component={ProfileScreen} 
            />
            <Drawer.Screen 
                name="Paramètres" 
                component={SettingsScreen} 
            />
        </Drawer.Navigator>
    );
}