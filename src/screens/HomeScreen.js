import React from "react";
import { Text, View, SectionList, StyleSheet } from "react-native";

import HomeSectionHeader from "../components/home/HomeSectionHeader";
import HomeSectionItem from "../components/home/HomeSectionItem";
import colors from "../constants/colors";

const HomeScreen = () => {
  const homeSections = [
    {
      title: "Libraries",
      data: [
        [
          {
            title: "HTML5",
            icon: {
              name: "language-html5",
              color: colors.HTML_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "da",
            icon: {
              name: "language-css3",
              color: colors.CSS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "da",
            icon: {
              name: "language-javascript",
              color: colors.JS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          }
        ]
      ]
    }
  ];
  return (
    <View>
      <SectionList
        sections={homeSections}
        keyExtractor={() => Math.random().toString()}
        renderSectionHeader={({ section }) => (
          <HomeSectionHeader section={section} />
        )}
        renderItem={({ item }) => <HomeSectionItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
