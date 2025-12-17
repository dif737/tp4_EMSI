import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoListScreen from "../screens/TodoListScreen";
import TodoDetailsScreen from "../screens/TodoDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#007AFF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen 
                name="Liste" 
                component={TodoListScreen}
                options={{ title: 'Mes Tâches' }}
            />
            <Stack.Screen 
                name="Details" 
                component={TodoDetailsScreen}
                options={{ title: 'Détails de la tâche' }}
            />
        </Stack.Navigator>
    );
}