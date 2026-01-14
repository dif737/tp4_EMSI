import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../services/firebase";
import { ThemeContext } from "../context/ThemeContext";

// ✅ Web-only Google component (so the hook is never called on Android/iOS)
function GoogleWebButton({ theme, setError }) {
  // These imports are ONLY used inside this component
  const WebBrowser = require("expo-web-browser");
  const Google = require("expo-auth-session/providers/google");
  const { GoogleAuthProvider, signInWithCredential } = require("firebase/auth");

  WebBrowser.maybeCompleteAuthSession();

  const WEB_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: WEB_CLIENT_ID,
    responseType: "id_token",
    scopes: ["profile", "email"],
  });

  // Handle Google response
  if (response?.type === "success") {
    const { id_token } = response.params;
    const credential = GoogleAuthProvider.credential(id_token);

    signInWithCredential(auth, credential).catch((e) => {
      console.log("GOOGLE ERROR =>", e.code, e.message);
      setError(e.code);
    });
  }

  return (
    <TouchableOpacity
      disabled={!request}
      onPress={() => promptAsync()}
      style={{
        backgroundColor: "#DB4437",
        padding: 14,
        borderRadius: 8,
        marginTop: 10,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>
        Continuer avec Google (WEB)
      </Text>
    </TouchableOpacity>
  );
}

export default function LoginScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
    } catch (e) {
      console.log("REGISTER ERROR =>", e.code, e.message);
      setError(e.code);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (e) {
      console.log("LOGIN ERROR =>", e.code, e.message);
      setError(e.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: theme.text,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Connexion
      </Text>

      {error !== "" && (
        <Text style={{ color: "red", marginBottom: 10, textAlign: "center" }}>
          {error}
        </Text>
      )}

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12,
          color: theme.text,
        }}
      />

      <TextInput
        placeholder="Mot de passe (min 6)"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 20,
          color: theme.text,
        }}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <TouchableOpacity
            onPress={login}
            style={{
              backgroundColor: theme.primary,
              padding: 14,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Se connecter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={register}
            style={{
              borderWidth: 1,
              borderColor: theme.primary,
              padding: 14,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.primary, textAlign: "center" }}>
              Créer un compte
            </Text>
          </TouchableOpacity>

          {/* ✅ Google ONLY on WEB (no hook on Android/iOS) */}
          {Platform.OS === "web" && (
            <GoogleWebButton theme={theme} setError={setError} />
          )}
        </>
      )}

      <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 30 }}>
        <Text style={{ textAlign: "center", color: theme.primary }}>
          Changer le thème
        </Text>
      </TouchableOpacity>
    </View>
  );
}
