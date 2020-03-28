import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GRAY, rgbaStringFromColor } from "../../constants/colors";

const ArticleBlockDefinitionListView = ({ block }) => {
  return (
    <>
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
            <Text style={styles.textDefinitionDefinition}>{d.definition}</Text>
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
