import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import AppStack from "./navigation/AppStack";
import { initDB } from "./services/database";

export default function App() {
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    initDB();
    setDbReady(true);
  }, []);

  if (!dbReady) return <ActivityIndicator size="large" />;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
