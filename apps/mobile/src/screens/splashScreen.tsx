import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import RootStackSafeAreaScreen from "../components/RootStackSafeAreaScreen";
import { Colors } from "../constants/Theme";

function SplashScreen() {
  const title = "Welcome to Github";

  return (
    <RootStackSafeAreaScreen backgroundColor={Colors.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>🐙</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <ActivityIndicator size="large" />
      </View>
    </RootStackSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
    marginTop: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.secondaryBackground,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  logoText: {
    fontSize: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondaryText,
    textAlign: "center",
    lineHeight: 22,
  },
});

export default SplashScreen;
