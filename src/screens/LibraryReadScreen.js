import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ArticleBlockView from "../components/ArticleBlockView";
import colors from "../constants/colors";

const LibraryReadScreen = ({ route }) => {
  const { articleId } = route.params;
  const library = useSelector(state => state.libraryReducer.library);
  const section = library.find(section =>
    section.data.find(sa => sa.id === articleId)
  );
  const article = section.data.find(sa => sa.id === articleId);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={article.articleBlocks}
        keyExtractor={(item, index) => `${item.type + index}`}
        renderItem={({ item }) => <ArticleBlockView block={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: colors.WHITE.hex
  }
});

export default LibraryReadScreen;
