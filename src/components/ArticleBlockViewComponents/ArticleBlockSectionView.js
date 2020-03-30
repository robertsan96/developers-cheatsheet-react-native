import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { THEMES } from "../../constants/colors";

const ArticleBlockSectionView = ({ block, children }) => {
  const colorSchema = useColorScheme();
  const textColor = () => {
    return THEMES.DEFAULT[colorSchema].SECTION_ROW_DESCRIPTION_COLOR.hex;
  };

  return (
    <View>
      <Text style={{ ...styles.textSectionHeading, color: textColor() }}>
        {block.title}
      </Text>
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
