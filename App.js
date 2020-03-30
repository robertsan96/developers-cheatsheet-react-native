import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import LibraryScreen from "./src/screens/LibraryScreen";
import LibraryReadScreen from "./src/screens/LibraryReadScreen";

import screens from "./src/constants/screens";

import store from "./src/store";

const Stack = createStackNavigator();

export default function App() {
  const colorSchema = useColorScheme();
  const theme = colorSchema === "dark" ? DarkTheme : DefaultTheme;
  StatusBar.setBarStyle(
    colorSchema === "light" ? "dark-content" : "light-content"
  );
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name={screens.LIBRARY_SCREEN.name}
              component={LibraryScreen}
            />
            <Stack.Screen
              name={screens.LIBRARY_READ_SCREEN.name}
              component={LibraryReadScreen}
              options={({ route }) => ({ title: route.params.articleTitle })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
