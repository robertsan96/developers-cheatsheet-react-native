import React from "react";
import { View, Text, StyleSheet } from "react-native";
import articleBlockType from "../constants/article-block";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import ArticleBlockWebView from "./ArticleBlockViewComponents/ArticleBlockWebView";
import { GRAY, rgbaStringFromColor } from "../constants/colors";

const ArticleBlockView = ({ block }) => {
  const typeText = () => {
    return (
      <View style={styles.blockWrapper}>
        <Text>{block.data}</Text>
      </View>
    );
  };
  const typeTextHeading = () => {
    return (
      <View style={styles.blockWrapper}>
        <Text style={styles.textHeading}>{block.data}</Text>
      </View>
    );
  };
  const typeTextDefinitionList = () => {
    return (
      <View style={styles.blockWrapper}>
        {block.data.map((d, index) => (
          <View
            style={{
              ...styles.blockWrapperRow,
              backgroundColor:
                index % 2 === 0 ? rgbaStringFromColor(GRAY, 0.8) : ""
            }}
          >
            <Text style={styles.textDefinitionElement}>{d.element}</Text>
            {d.definition && <Text> - </Text>}
            {d.definition && (
              <Text style={styles.textDefinitionDefinition}>
                {d.definition}
              </Text>
            )}
          </View>
        ))}
      </View>
    );
  };
  const typeCode = () => {
    return (
      <View style={{ ...styles.blockWrapper, padding: 0 }}>
        <SyntaxHighlighter language={block.language} highlighter="prism">
          {block.data}
        </SyntaxHighlighter>
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
        return typeText();
      case articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING:
        return typeTextHeading();
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
  },
  blockWrapperRow: {
    display: "flex",
    flexDirection: "row",

    alignItems: "stretch"
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textDefinitionElement: {
    minWidth: 80,
    fontWeight: "700"
  },
  textDefinitionDefinition: {
    flex: 1
  }
});

export default ArticleBlockView;
