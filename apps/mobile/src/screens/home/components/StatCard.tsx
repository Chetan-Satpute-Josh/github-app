import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { StatCardProps } from "../types";

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
      {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  statCard: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 12,
    padding: 16,
    width: "48%",
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: Colors.secondaryText,
    textAlign: "center",
  },
  statSubtitle: {
    fontSize: 10,
    color: Colors.secondaryText,
    textAlign: "center",
  },
});

export default StatCard; 