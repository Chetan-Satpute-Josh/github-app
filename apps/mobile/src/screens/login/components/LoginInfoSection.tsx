import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "#constants/Theme";
import { LoginInfoSectionProps } from "../types";
import InfoStep from "./InfoStep";

const LoginInfoSection: React.FC<LoginInfoSectionProps> = ({ title, steps }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>{title}</Text>
      <View style={styles.infoSteps}>
        {steps.map((step) => (
          <InfoStep
            key={step.number}
            stepNumber={step.number}
            stepText={step.text}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 16,
    textAlign: "center",
  },
  infoSteps: {
    gap: 12,
  },
});

export default LoginInfoSection; 