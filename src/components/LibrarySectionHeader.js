import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { THEMES, rgbaStringFromColor } from "../constants/colors";
import { useColorScheme } from "react-native-appearance";

const LibrarySectionHeader = ({ title }) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: rgbaStringFromColor(
          THEMES.DEFAULT[colorScheme].PRIMARY_COLOR,
          1
        )
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

LibrarySectionHeader.propTypes = {
  title: PropTypes.string
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

export default LibrarySectionHeader;
