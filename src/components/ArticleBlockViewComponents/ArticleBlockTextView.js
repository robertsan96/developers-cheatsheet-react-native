import React from "react";
import articleBlockType from "../../constants/article-block";
import { Text, StyleSheet } from "react-native";

const ArticleBlockTextView = ({ block }) => {
  const typeText = () => {
    return <Text>{block.data}</Text>;
  };
  const typeTextHeading = () => {
    return <Text style={styles.textHeading}>{block.data}</Text>;
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
