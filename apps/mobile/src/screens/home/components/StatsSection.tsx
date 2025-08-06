import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { StatsSectionProps } from "../types";
import StatCard from "./StatCard";

const StatsSection: React.FC<StatsSectionProps> = ({ user }) => {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.sectionTitle}>Statistics</Text>
      <View style={styles.statsGrid}>
        <StatCard title="Public Repos" value={user.public_repos} />
        <StatCard title="Followers" value={user.followers} />
        <StatCard title="Following" value={user.following} />
        <StatCard title="Public Gists" value={user.public_gists} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default StatsSection; 