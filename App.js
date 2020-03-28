import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LibraryScreen from "./src/screens/LibraryScreen";
import LibraryReadScreen from "./src/screens/LibraryReadScreen";

import screens from "./src/constants/screens";

import store from "./src/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
