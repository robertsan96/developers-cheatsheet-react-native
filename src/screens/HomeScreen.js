import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

const HomeScreen = () => {
  const state = useSelector(state => state);

  console.log(state);
  return (
    <SafeAreaView>
      <Text style={styles.test}>test</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: "red"
  }
});

export default HomeScreen;
