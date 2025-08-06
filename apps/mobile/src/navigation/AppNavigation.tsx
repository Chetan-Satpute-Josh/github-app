import { createStaticNavigation } from "@react-navigation/native";
import RootStackNavigator from "./RootStackNavigator";
import { useAuth } from "#contexts/AuthContext";
import SplashScreen from "#screens/splashScreen";
import { useEffect, useState } from "react";

const Navigation = createStaticNavigation(RootStackNavigator);

function AppNavigation() {
  const [showSplash, setShowSplash] = useState(true);
  const { isLoading } = useAuth();

  useEffect(() => {
    if (isLoading === false) {
      setShowSplash(false);
    }
  }, [isLoading]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <Navigation />;
}

export default AppNavigation;
