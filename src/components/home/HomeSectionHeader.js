import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PropTypes from "prop-types";
import { rgbaStringFromColor, THEMES } from "../../constants/colors";
import { useColorScheme } from "react-native-appearance";

const HomeSectionHeader = ({ section }) => {
  const colorScheme = useColorScheme();

  const wrapperStyle = () => ({
    ...styles.wrapper,
    backgroundColor: rgbaStringFromColor(
      THEMES.DEFAULT[colorScheme].PRIMARY_COLOR
    )
  });

  return (
    <View style={wrapperStyle()}>
      <Text style={styles.title}>{section.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    padding: 10
  }
});

HomeSectionHeader.propTypes = {
  section: PropTypes.object
};

export default HomeSectionHeader;
