import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import HomeSectionItemElement from "./HomeSectionItemElement";

const HomeSectionItem = ({ item }) => {
  return (
    <FlatList
      style={styles.wrapper}
      keyExtractor={() => Math.random().toString()}
      data={item}
      renderItem={({ item }) => <HomeSectionItemElement item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default HomeSectionItem;
