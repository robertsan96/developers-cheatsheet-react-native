import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import {
  darcula as prismDark,
  prism as prismLight
} from "react-syntax-highlighter/dist/styles/prism";

import { GRAY, rgbaStringFromColor, YELLOW, THEMES } from "../constants/colors";
import { STAR_ICON } from "../constants/images";

import { useColorScheme } from "react-native-appearance";

import PropTypes from "prop-types";

const rowConfiguration = {
  shouldShowTitle: true,
  shouldShowShortDescription: true,
  shouldShowSnippet: true
};

const LibrarySectionRow = ({ item, index, rowConfig = rowConfiguration }) => {
  const colorSchema = useColorScheme();

  const sectionRowColor = index => {
    const color =
      index % 2 === 0
        ? THEMES.DEFAULT[colorSchema].SECTION_ROW_STRIP_EVEN_COLOR
        : THEMES.DEFAULT[colorSchema].SECTION_ROW_STRIP_ODD_COLOR;

    return rgbaStringFromColor(color, 0.5);
  };
  const snippetViewColor = () => {
    return colorSchema === "light" ? prismLight : prismDark;
  };

  const snippetView = () => {
    return item.tag !== undefined ? (
      <View style={{ marginLeft: -10 }}>
        <SyntaxHighlighter
          language={item.language}
          highlighter="prism"
          style={snippetViewColor()}
        >
          {item.tag}
        </SyntaxHighlighter>
      </View>
    ) : null;
  };
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: sectionRowColor(index)
      }}
    >
      <View style={styles.rowWrapper}>
        <View style={styles.textLayer}>
          {rowConfig.shouldShowTitle && (
            <Text
              style={{
                ...styles.title,
                color: THEMES.DEFAULT[colorSchema].SECTION_ROW_TITLE_COLOR.hex
              }}
            >
              {item.title}
            </Text>
          )}
          {rowConfig.shouldShowShortDescription &&
            item.shortDescription !== undefined && (
              <Text
                style={{
                  ...styles.shortDescription,
                  color:
                    THEMES.DEFAULT[colorSchema].SECTION_ROW_DESCRIPTION_COLOR
                      .hex
                }}
              >
                {item.shortDescription}
              </Text>
            )}
          {rowConfig.shouldShowSnippet && snippetView()}
        </View>

        <TouchableOpacity style={styles.controlLayer}>
          <Image
            style={{
              ...styles.controlLayerFavoriteImage,
              tintColor: rgbaStringFromColor(YELLOW, 0.2)
            }}
            source={STAR_ICON}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

LibrarySectionRow.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  textLayer: {
    // backgroundColor: "red",
    flex: 1
  },
  controlLayer: {
    width: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  controlLayerFavoriteImage: {
    width: 20,
    height: 20
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0
  },
  shortDescription: {
    fontWeight: "300",
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 0
  }
});

export default LibrarySectionRow;
