import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { PrivateInfoSectionProps } from "../types";
import InfoRow from "./InfoRow";

const PrivateInfoSection: React.FC<PrivateInfoSectionProps> = ({ user }) => {
  // Only show this section if we have private information
  const hasPrivateInfo = user.private_gists !== undefined || 
                        user.total_private_repos !== undefined || 
                        user.owned_private_repos !== undefined || 
                        user.collaborators !== undefined;

  if (!hasPrivateInfo) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Private Information</Text>
      <View style={styles.infoCard}>
        {user.total_private_repos !== undefined && (
          <InfoRow label="Private repos" value={user.total_private_repos} />
        )}
        {user.owned_private_repos !== undefined && (
          <InfoRow label="Owned private repos" value={user.owned_private_repos} />
        )}
        {user.private_gists !== undefined && (
          <InfoRow label="Private gists" value={user.private_gists} />
        )}
        {user.collaborators !== undefined && (
          <InfoRow label="Collaborators" value={user.collaborators} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});

export default PrivateInfoSection; 