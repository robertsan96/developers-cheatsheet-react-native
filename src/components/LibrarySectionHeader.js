import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { PRIMARY_COLOR, rgbaStringFromColor } from "../constants/colors";

const LibrarySectionHeader = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

LibrarySectionHeader.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: rgbaStringFromColor(PRIMARY_COLOR, 1),

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
