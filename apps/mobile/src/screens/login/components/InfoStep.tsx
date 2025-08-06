import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { InfoStepProps } from "../types";

const InfoStep: React.FC<InfoStepProps> = ({ stepNumber, stepText }) => {
  return (
    <View style={styles.infoStep}>
      <Text style={styles.stepNumber}>{stepNumber}</Text>
      <Text style={styles.stepText}>{stepText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoStep: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  stepNumber: {
    backgroundColor: Colors.buttonBackground,
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: "center",
    lineHeight: 24,
    marginRight: 12,
    marginTop: 2,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: Colors.secondaryText,
    lineHeight: 20,
  },
});

export default InfoStep; 