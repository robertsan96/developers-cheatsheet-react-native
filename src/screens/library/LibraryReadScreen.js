import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ArticleBlockView from "../../components/library/ArticleBlockView";
import colors, { THEMES } from "../../constants/colors";
import { useColorScheme } from "react-native-appearance";

const LibraryReadScreen = ({ route }) => {
  const { articleId } = route.params;
  const colorScheme = useColorScheme();
  const library = useSelector(state => state.libraryReducer.library);
  const section = library.find(section =>
    section.data.find(sa => sa.id === articleId)
  );
  const article = section.data.find(sa => sa.id === articleId);

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor:
          THEMES.DEFAULT[colorScheme].PRIMARY_BACKGROUND_COLOR.hex
      }}
    >
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
    height: "100%"
  }
});

export default LibraryReadScreen;
