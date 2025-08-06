import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import RootStackSafeAreaScreen from "#components/RootStackSafeAreaScreen";
import { Colors } from "#constants/Theme";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import LoginInfoSection from "./components/LoginInfoSection";
import { useAuth } from "#contexts/AuthContext";

function LoginScreen() {
  const [patToken, setPatToken] = useState("");

  const { login } = useAuth();

  const handleSignIn = () => {
    if (patToken.trim()) {
      login(patToken);
    }
  };

  const isButtonDisabled = !patToken.trim();

  const infoSteps = [
    {
      number: 1,
      text: "Go to GitHub Settings → Developer settings → Personal access tokens",
    },
    {
      number: 2,
      text: 'Click "Generate new token" and select the required scopes',
    },
    {
      number: 3,
      text: "Copy the generated token and paste it above",
    },
  ];

  return (
    <RootStackSafeAreaScreen backgroundColor={Colors.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <LoginHeader
            title="Welcome to GitHub"
            subtitle="Sign in with your Personal Access Token"
          />

          <LoginForm
            patToken={patToken}
            onPatTokenChange={setPatToken}
            onSignIn={handleSignIn}
            isButtonDisabled={isButtonDisabled}
          />

          <LoginInfoSection
            title="How to get a Personal Access Token?"
            steps={infoSteps}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </RootStackSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default LoginScreen;
