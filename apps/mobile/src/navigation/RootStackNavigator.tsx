import { StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackScreenName } from "../constants/ScreenNames";
import LoginScreen from "#screens/LoginScreen";
import HomeScreen from "#screens/HomeScreen";

const RootStackNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [RootStackScreenName.Login]: {
      screen: LoginScreen,
    },
    [RootStackScreenName.Home]: {
      screen: HomeScreen,
    },
  },
});

export default RootStackNavigator;

export type RootStackParamList = StaticParamList<typeof RootStackNavigator>;
