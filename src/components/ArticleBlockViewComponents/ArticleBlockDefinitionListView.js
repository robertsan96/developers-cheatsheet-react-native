import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GRAY, rgbaStringFromColor, THEMES } from "../../constants/colors";
import { useColorScheme } from "react-native-appearance";

const ArticleBlockDefinitionListView = ({ block }) => {
  const colorSchema = useColorScheme();
  const sectionRowColor = index => {
    const color =
      index % 2 === 0
        ? THEMES.DEFAULT[colorSchema].SECTION_ROW_STRIP_EVEN_COLOR
        : THEMES.DEFAULT[colorSchema].SECTION_ROW_STRIP_ODD_COLOR;

    return rgbaStringFromColor(color, 0.5);
  };
  const textColor = () => {
    return THEMES.DEFAULT[colorSchema].SECTION_ROW_DESCRIPTION_COLOR.hex;
  };
  return (
    <>
      {block.data.map((d, index) => (
        <View
          key={Math.random()}
          style={{
            ...styles.blockWrapperRow,
            backgroundColor: sectionRowColor(index)
          }}
        >
          <Text style={{ ...styles.textDefinitionElement, color: textColor() }}>
            {d.element}
          </Text>
          {d.definition && <Text style={{ color: textColor() }}> - </Text>}
          {d.definition && (
            <Text
              style={{ ...styles.textDefinitionDefinition, color: textColor() }}
            >
              {d.definition}
            </Text>
          )}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  blockWrapperRow: {
    display: "flex",
    flexDirection: "row",

    alignItems: "stretch"
  },
  textDefinitionElement: {
    minWidth: 80,
    fontWeight: "700"
  },
  textDefinitionDefinition: {
    flex: 1
  }
});

export default ArticleBlockDefinitionListView;
