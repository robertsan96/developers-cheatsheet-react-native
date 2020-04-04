import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <MainNavigator />
      </AppearanceProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
