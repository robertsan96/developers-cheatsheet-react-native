import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import { Audio } from "expo-av";

const PopInView = ({ children }) => {
  const [popInAnimDirectionRight, setPopInAnimDirectionRight] = useState(true);
  const [popInAnim] = useState(
    new Animated.Value(popInAnimDirectionRight ? 0 : 4)
  );
  const popInInterpolator = popInAnim.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, 0.3, 0.6, 2, 1],
  });
  const animatedStyle = {
    transform: [
      {
        scale: popInInterpolator,
      },
    ],
  };

  const runPopSoundEffect = async () => {
    const popSoundEffect = new Audio.Sound();
    try {
      await popSoundEffect.loadAsync(require("../../sounds/pop.m4a"));
      await popSoundEffect.playAsync();
    } catch {}
  };

  const runAnimation = () => {
    Animated.timing(popInAnim, {
      toValue: popInAnimDirectionRight ? 4 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    runAnimation();
    runPopSoundEffect();
  }, [popInAnimDirectionRight]);
  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default PopInView;
