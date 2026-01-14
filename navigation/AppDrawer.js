import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TodoListFetchScreen from "../screens/TodoListFetchScreen";
import TodoListOfflineScreen from "../screens/TodoListOfflineScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profil" component={ProfileScreen} />

      {/* ✅ Exigences TP7 */}
      <Drawer.Screen name="Todos API (Fetch/Axios)" component={TodoListFetchScreen} />
      <Drawer.Screen name="Todos Offline (SQLite)" component={TodoListOfflineScreen} />
    </Drawer.Navigator>
  );
}
