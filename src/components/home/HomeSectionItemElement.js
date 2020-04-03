import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Proptypes from "prop-types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors, { rgbaStringFromColor } from "../../constants/colors";

const HomeSectionItemElement = ({ item }) => {
  return (
    <View style={{ ...styles.wrapper, backgroundColor: item.icon.color.hex }}>
      <MaterialCommunityIcons
        size={64}
        name={item.icon.name}
        color={colors.WHITE.hex}
      />
      <Text style={{ ...styles.title, color: colors.WHITE.hex }}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    width: 110,
    height: 110,
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
