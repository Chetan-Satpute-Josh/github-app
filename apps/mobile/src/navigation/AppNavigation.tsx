import { createStaticNavigation } from "@react-navigation/native";
import RootStackNavigator from "./RootStackNavigator";

const Navigation = createStaticNavigation(RootStackNavigator);

function AppNavigation() {
  return <Navigation />;
}

export default AppNavigation;
