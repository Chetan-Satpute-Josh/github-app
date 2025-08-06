import { StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackScreenName } from "#constants/ScreenNames";
import LoginScreen from "#screens/login/LoginScreen";
import HomeScreen from "#screens/home/HomeScreen";
import { useIsSignedIn, useIsSignedOut } from "#hooks/authentication";

const RootStackNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [RootStackScreenName.Login]: {
      if: useIsSignedOut,
      screen: LoginScreen,
    },
    [RootStackScreenName.Home]: {
      if: useIsSignedIn,
      screen: HomeScreen,
    },
  },
});

export default RootStackNavigator;

export type RootStackParamList = StaticParamList<typeof RootStackNavigator>;
