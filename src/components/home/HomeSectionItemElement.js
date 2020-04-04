import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Proptypes from "prop-types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors, { rgbaStringFromColor, THEMES } from "../../constants/colors";
import { useColorScheme } from "react-native-appearance";

const HomeSectionItemElement = ({ item }) => {
  const colorScheme = useColorScheme();
  const getWrapperColor = () => {
    if (item.enabled) return item.icon.color.hex;
    return THEMES.DEFAULT[colorScheme].DISABLED_COLOR.hex;
  };
  const didPressElement = () => {
    if (item.enabled) item.onPress(item);
    if (!item.enabled) console.log("bicias");
  };
  return (
    <TouchableOpacity
      onPress={didPressElement}
      activeOpacity={item.enabled ? 0.2 : 1}
      style={{ ...styles.wrapper, backgroundColor: getWrapperColor() }}
    >
      <MaterialCommunityIcons
        size={64}
        name={item.icon.name}
        color={colors.WHITE.hex}
      />
      <Text style={{ ...styles.title, color: colors.WHITE.hex }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0
  }
});

HomeSectionItemElement.propTypes = {
  item: Proptypes.object
};

export default HomeSectionItemElement;
