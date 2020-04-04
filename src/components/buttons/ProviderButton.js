import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../constants/colors";

const ProviderButton = ({ provider }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, borderColor: provider.color.hex }}
    >
      <Text style={{ ...styles.providerText, color: provider.color.hex }}>
        {provider.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 200,
    borderWidth: 1,
    borderRadius: 10,
  },
  providerText: {
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: 40,
    fontWeight: "700",
    letterSpacing: 2,
    textAlign: "center",
  },
});

export default ProviderButton;
