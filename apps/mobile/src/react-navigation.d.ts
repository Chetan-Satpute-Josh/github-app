import { RootStackParamList } from "#navigation/RootStackNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
