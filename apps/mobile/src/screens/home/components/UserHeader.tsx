import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { UserHeaderProps } from "../types";

const UserHeader: React.FC<UserHeaderProps> = ({ user }) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>@{user.login}</Text>
        {user.name && user.name.trim() !== "" && (
          <Text style={styles.name}>{user.name}</Text>
        )}
        {user.bio && user.bio.trim() !== "" && (
          <Text style={styles.bio}>{user.bio}</Text>
        )}
        {user.location && user.location.trim() !== "" && (
          <Text style={styles.location}>📍 {user.location}</Text>
        )}
        {user.company && user.company.trim() !== "" && (
          <Text style={styles.company}>🏢 {user.company}</Text>
        )}
        {user.blog && user.blog.trim() !== "" && (
          <Text style={styles.blog}>🌐 {user.blog}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    color: Colors.secondaryText,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: Colors.secondaryText,
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    color: Colors.secondaryText,
    marginBottom: 2,
  },
  blog: {
    fontSize: 14,
    color: Colors.secondaryText,
  },
});

export default UserHeader; 