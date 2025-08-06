import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { InfoRowProps } from "../types";

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  // Handle null, undefined, or empty values
  const displayValue = value === null || value === undefined ? "Not available" : String(value);
  
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  infoLabel: {
    fontSize: 14,
    color: Colors.secondaryText,
  },
  infoValue: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "500",
  },
});

export default InfoRow; 