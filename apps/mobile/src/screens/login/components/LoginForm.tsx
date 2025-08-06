import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Colors } from "#constants/Theme";
import { LoginFormProps } from "../types";
import { useAuth } from "../../../contexts/AuthContext";

const LoginForm: React.FC<LoginFormProps> = ({
  patToken,
  onPatTokenChange,
  onSignIn,
  isButtonDisabled,
}) => {
  const { isLoading } = useAuth();

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Personal Access Token</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your GitHub PAT"
          placeholderTextColor={Colors.secondaryText}
          value={patToken}
          onChangeText={onPatTokenChange}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />
      </View>

      <TouchableOpacity
        style={[
          styles.signInButton,
          isButtonDisabled && styles.signInButtonDisabled,
        ]}
        onPress={onSignIn}
        disabled={isButtonDisabled}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.signInButtonText}>Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.secondaryBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: Colors.text,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  signInButtonDisabled: {
    backgroundColor: Colors.secondaryBackground,
    borderColor: Colors.border,
    opacity: 0.5,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
});

export default LoginForm;

