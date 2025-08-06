import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function RootStackSafeAreaScreen(
  props: PropsWithChildren<Pick<ViewStyle, "backgroundColor">>
) {
  const { children, backgroundColor } = props;

  const {
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
  } = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
        },
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootStackSafeAreaScreen;
