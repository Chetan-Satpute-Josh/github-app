import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { AccountInfoSectionProps } from "../types";
import InfoRow from "./InfoRow";
import { formatDate, formatBytes } from "../utils";

const AccountInfoSection: React.FC<AccountInfoSectionProps> = ({ user }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Account Information</Text>
      <View style={styles.infoCard}>
        <InfoRow label="Member since" value={formatDate(user.created_at)} />
        <InfoRow label="Last updated" value={formatDate(user.updated_at)} />
        {user.plan && (
          <InfoRow 
            label="Plan" 
            value={user.plan.name.charAt(0).toUpperCase() + user.plan.name.slice(1)} 
          />
        )}
        {user.disk_usage !== undefined && (
          <InfoRow label="Disk usage" value={formatBytes(user.disk_usage)} />
        )}
        {user.two_factor_authentication !== undefined && (
          <InfoRow 
            label="2FA enabled" 
            value={user.two_factor_authentication ? "Yes" : "No"} 
          />
        )}
        {user.email && user.email.trim() !== "" && (
          <InfoRow label="Email" value={user.email} />
        )}
        {user.hireable !== null && (
          <InfoRow 
            label="Hireable" 
            value={user.hireable ? "Yes" : "No"} 
          />
        )}
        {user.site_admin && (
          <InfoRow label="Site Admin" value="Yes" />
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

export default AccountInfoSection; 