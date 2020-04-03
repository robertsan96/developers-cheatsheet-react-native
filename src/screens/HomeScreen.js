import React from "react";
import { Text, View, SectionList } from "react-native";

const HomeScreen = () => {
  const homeSections = [
    {
      title: "da",
      data: [
        {
          title: "nu"
        }
      ]
    }
  ];
  return (
    <View>
      <SectionList
        sections={homeSections}
        keyExtractor={item => {
          item.title;
        }}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
