import React from "react";
import { StyleSheet, View } from "react-native";

import LibraryList from "../components/LibraryList";

import screens from "../constants/screens";

import { useSelector } from "react-redux";

const LibraryScreen = ({ navigation }) => {
  const library = useSelector(state => state.libraryReducer);
  const onLibraryRow = article => {
    navigation.navigate(screens.LIBRARY_READ_SCREEN.name, {
      articleId: article.id,
      articleTitle: article.title
    });
  };

  return (
    <View style={styles.wrapper}>
      <LibraryList data={library.library} onLibraryRow={onLibraryRow} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    // backgroundColor: "red",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  test: {
    backgroundColor: "red"
  }
});

export default LibraryScreen;
