import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RootStackSafeAreaScreen from "#components/RootStackSafeAreaScreen";
import { Colors } from "#constants/Theme";

function LoginScreen() {
  return (
    <RootStackSafeAreaScreen backgroundColor={Colors.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Github PAT"
          placeholderTextColor={Colors.secondaryText}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </RootStackSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.buttonBackground,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.text,
    fontSize: 14,
    fontWeight: 500,
  },
});

export default LoginScreen;
