import React from "react";
import articleBlockType from "../../constants/article-block";
import { Text, StyleSheet } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { THEMES } from "../../constants/colors";

const ArticleBlockTextView = ({ block }) => {
  const colorSchema = useColorScheme();
  const textColor = () => {
    return THEMES.DEFAULT[colorSchema].SECTION_ROW_DESCRIPTION_COLOR.hex;
  };

  const typeText = () => {
    return <Text style={{ color: textColor() }}>{block.data}</Text>;
  };
  const typeTextHeading = () => {
    return (
      <Text style={{ ...styles.textHeading, color: textColor() }}>
        {block.data}
      </Text>
    );
  };

  const getBlockType = () => {
    switch (block.type) {
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT:
        return typeText();
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING:
        return typeTextHeading();
      default:
        return <Text>Unknown text type found.</Text>;
    }
  };

  return getBlockType();
};

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ArticleBlockTextView;
