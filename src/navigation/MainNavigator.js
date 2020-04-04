import React from "react";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/library/LibraryScreen";
import LibraryReadScreen from "../screens/library/LibraryReadScreen";

import screens from "../constants/screens";

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={screens.LOGIN_SCREEN.name}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="AuthNavigator"
          options={{ headerShown: false }}
          component={AuthNavigator}
        />
        {/* <MainStack.Screen
          name={screens.HOME_SCREEN.name}
          component={HomeScreen}
        />
        <MainStack.Screen
          name={screens.LIBRARY_SCREEN.name}
          component={LibraryScreen}
        />
        <MainStack.Screen
          name={screens.LIBRARY_READ_SCREEN.name}
          component={LibraryReadScreen}
          options={({ route }) => ({ title: route.params.articleTitle })}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
