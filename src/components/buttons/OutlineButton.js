import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const OutlineButton = ({
  borderColor = colors.WHITE,
  textColor = colors.WHITE,
  text = "",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.wrapper, borderColor: borderColor.hex }}
    >
      <Text style={{ ...styles.buttonText, color: textColor.hex }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 200,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: 40,
    fontWeight: "700",
    letterSpacing: 2,
    textAlign: "center",
  },
});

export default OutlineButton;
