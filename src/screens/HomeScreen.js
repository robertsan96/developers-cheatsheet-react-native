import React from "react";
import { Text, View, SectionList, StyleSheet } from "react-native";

import HomeSectionHeader from "../components/home/HomeSectionHeader";
import HomeSectionItem from "../components/home/HomeSectionItem";
import colors from "../constants/colors";
import screens from "../constants/screens";

const HomeScreen = ({ navigation }) => {
  const onPressElement = element => {
    navigation.navigate(screens.LIBRARY_SCREEN.name);
  };
  const homeSections = [
    {
      title: "Libraries",
      data: [
        [
          {
            title: "HTML5",
            enabled: true,
            onPress: onPressElement,
            icon: {
              name: "language-html5",
              color: colors.HTML_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "CSS3",
            enabled: true,
            onPress: onPressElement,
            icon: {
              name: "language-css3",
              color: colors.CSS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "JavaScript",
            enabled: true,
            onPress: onPressElement,
            icon: {
              name: "language-javascript",
              color: colors.JS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "React",
            enabled: true,
            onPress: onPressElement,
            icon: {
              name: "react",
              color: colors.REACT_COLOR,
              pack: "MaterialCommunityIcons"
            }
          }
        ]
      ]
    },
    {
      title: "HTML",
      data: [
        [
          {
            title: "Code",
            enabled: true,
            icon: {
              name: "code-not-equal-variant",
              color: colors.HTML_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "Quiz",
            enabled: true,
            icon: {
              name: "comment-question",
              color: colors.CSS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "Learn Mode",
            enabled: true,
            icon: {
              name: "notebook",
              color: colors.PURPLE,
              pack: "MaterialCommunityIcons"
            }
          }
        ]
      ]
    },
    {
      title: "CSS",
      data: [
        [
          {
            title: "Code",
            enabled: true,
            icon: {
              name: "code-not-equal-variant",
              color: colors.HTML_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "Quiz",
            enabled: true,
            icon: {
              name: "comment-question",
              color: colors.CSS_COLOR,
              pack: "MaterialCommunityIcons"
            }
          },
          {
            title: "Learn Mode",
            enabled: true,
            icon: {
              name: "notebook",
              color: colors.PURPLE,
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
