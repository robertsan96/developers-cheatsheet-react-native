import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleBlockSectionView = ({ block, children }) => {
  return (
    <View>
      <Text style={styles.textSectionHeading}>{block.title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  textSectionHeading: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default ArticleBlockSectionView;
