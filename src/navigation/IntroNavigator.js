import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import screens from "../constants/screens";
import IntroScreen from "../screens/IntroScreen";

const IntroStack = createStackNavigator();

const IntroNavigator = () => {
  return (
    <IntroStack.Navigator screenOptions={{ headerShown: false }}>
      <IntroStack.Screen
        name={screens.INTRO_SCREEN.name}
        component={IntroScreen}
      />
    </IntroStack.Navigator>
  );
};

export default IntroNavigator;
