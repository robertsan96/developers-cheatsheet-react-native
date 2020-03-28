import React from "react";
import { View, Text, StyleSheet } from "react-native";
import articleBlockType from "../constants/article-block";
import ArticleBlockWebView from "./ArticleBlockViewComponents/ArticleBlockWebView";
import ArticleBlockCodeView from "./ArticleBlockViewComponents/ArticleBlockCodeView";
import ArticleBlockTextView from "./ArticleBlockViewComponents/ArticleBlockTextView";
import ArticleBlockDefinitionListView from "./ArticleBlockViewComponents/ArticleBlockDefinitionListView";
import ArticleBlockSectionView from "./ArticleBlockViewComponents/ArticleBlockSectionView";

const ArticleBlockView = ({ block }) => {
  const typeSection = forBlock => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockSectionView block={forBlock}>
          <>
            {forBlock.data.map(b => (
              <View key={Math.random()}>{getViewByBlockType(b)}</View>
            ))}
          </>
        </ArticleBlockSectionView>
      </View>
    );
  };
  const typeText = forBlock => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockTextView block={forBlock} />
      </View>
    );
  };
  const typeTextDefinitionList = forBlock => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockDefinitionListView block={forBlock} />
      </View>
    );
  };
  const typeCode = forBlock => {
    return (
      <View style={{ ...styles.blockWrapper, padding: 0 }}>
        <ArticleBlockCodeView block={forBlock} />
      </View>
    );
  };

  const typeWebView = forBlock => {
    return (
      <View style={styles.blockWrapper}>
        <ArticleBlockWebView block={forBlock} />
      </View>
    );
  };

  const getViewByBlockType = forBlock => {
    switch (forBlock.type) {
      case articleBlockType.ARTICLE_BLOCK_TYPE_SECTION:
        return typeSection(forBlock);
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT:
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING:
        return typeText(forBlock);
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST:
        return typeTextDefinitionList(forBlock);
      case articleBlockType.ARTICLE_BLOCK_TYPE_CODE:
        return typeCode(forBlock);
      case articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW:
        return typeWebView(forBlock);
      default:
        return <Text>Something went crazy wrong :(</Text>;
    }
  };

  return getViewByBlockType(block);
};

const styles = StyleSheet.create({
  blockWrapper: {
    padding: 10
  }
});

export default ArticleBlockView;
