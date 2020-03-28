import React from "react";
import { View, Text, StyleSheet } from "react-native";
import articleBlockType from "../constants/article-block";
import ArticleBlockWebView from "./ArticleBlockViewComponents/ArticleBlockWebView";
import ArticleBlockCodeView from "./ArticleBlockViewComponents/ArticleBlockCodeView";
import ArticleBlockTextView from "./ArticleBlockViewComponents/ArticleBlockTextView";
import ArticleBlockDefinitionListView from "./ArticleBlockViewComponents/ArticleBlockDefinitionListView";

const ArticleBlockView = ({ block }) => {
  const typeText = () => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockTextView block={block} />
      </View>
    );
  };
  const typeTextDefinitionList = () => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockDefinitionListView block={block} />
      </View>
    );
  };
  const typeCode = () => {
    return (
      <View style={{ ...styles.blockWrapper, padding: 0 }}>
        <ArticleBlockCodeView block={block} />
      </View>
    );
  };

  const typeWebView = () => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockWebView block={block} />
      </View>
    );
  };

  const getViewByBlockType = () => {
    switch (block.type) {
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT:
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING:
        return typeText();
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST:
        return typeTextDefinitionList();
      case articleBlockType.ARTICLE_BLOCK_TYPE_CODE:
        return typeCode();
      case articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW:
        return typeWebView();
      default:
        return <Text>Something went crazy wrong :(</Text>;
    }
  };

  return getViewByBlockType();
};

const styles = StyleSheet.create({
  blockWrapper: {
    padding: 10
  }
});

export default ArticleBlockView;
