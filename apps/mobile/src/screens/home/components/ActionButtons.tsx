import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { Colors } from "#constants/Theme";
import { useAuth } from "../../../contexts/AuthContext";

interface ActionButtonsProps {
  githubUrl?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ githubUrl }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleOpenGitHub = async () => {
    if (!githubUrl) return;

    const supported = await Linking.canOpenURL(githubUrl);

    if (supported) {
      await Linking.openURL(githubUrl);
    } else {
      Alert.alert("Error", "Can't open this URL");
    }
  };

  return (
    <View style={styles.container}>
      {githubUrl && (
        <TouchableOpacity style={styles.githubLink} onPress={handleOpenGitHub}>
          <Text style={styles.githubLinkText}>View on GitHub</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  githubLink: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  githubLinkText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c82333",
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
});

export default ActionButtons;

