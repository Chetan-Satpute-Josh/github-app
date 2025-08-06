import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import RootStackSafeAreaScreen from "#components/RootStackSafeAreaScreen";
import { Colors } from "#constants/Theme";
import UserHeader from "./components/UserHeader";
import StatsSection from "./components/StatsSection";
import AccountInfoSection from "./components/AccountInfoSection";
import PrivateInfoSection from "./components/PrivateInfoSection";
import ActionButtons from "./components/ActionButtons";
import { GitHubUser } from "#services/api/users/schema";
import { useAuth } from "../../contexts/AuthContext";

// Mock data - in a real app, this would come from props or API
// const userData: GitHubUser = {
//   login: "Chetan-Satpute-Josh",
//   id: 124863404,
//   node_id: "U_kgDOB3FDrA",
//   avatar_url: "https://avatars.githubusercontent.com/u/124863404?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/Chetan-Satpute-Josh",
//   html_url: "https://github.com/Chetan-Satpute-Josh",
//   followers_url: "https://api.github.com/users/Chetan-Satpute-Josh/followers",
//   following_url:
//     "https://api.github.com/users/Chetan-Satpute-Josh/following{/other_user}",
//   gists_url: "https://api.github.com/users/Chetan-Satpute-Josh/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/Chetan-Satpute-Josh/starred{/owner}{/repo}",
//   subscriptions_url:
//     "https://api.github.com/users/Chetan-Satpute-Josh/subscriptions",
//   organizations_url: "https://api.github.com/users/Chetan-Satpute-Josh/orgs",
//   repos_url: "https://api.github.com/users/Chetan-Satpute-Josh/repos",
//   events_url:
//     "https://api.github.com/users/Chetan-Satpute-Josh/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/Chetan-Satpute-Josh/received_events",
//   type: "User",
//   user_view_type: "public",
//   site_admin: false,
//   name: null,
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 10,
//   public_gists: 0,
//   followers: 0,
//   following: 0,
//   created_at: "2023-02-09T06:17:46Z",
//   updated_at: "2025-04-14T04:02:42Z",
//   notification_email: null,
// };

function HomeScreen() {
  const { user: userData } = useAuth();

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RootStackSafeAreaScreen backgroundColor={Colors.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <UserHeader user={userData} />
        <StatsSection user={userData} />
        <AccountInfoSection user={userData} />
        <PrivateInfoSection user={userData} />
        <ActionButtons githubUrl={userData.html_url} />
      </ScrollView>
    </RootStackSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
