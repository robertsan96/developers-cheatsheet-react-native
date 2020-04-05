import React, { useState, useEffect } from "react";

import { Animated, Easing } from "react-native";

const WaveView = ({ fromDeg = -20, toDeg = 20, children }) => {
  const [waveDirectionRight, setWaveDirectionRight] = useState(true);
  const getOutputRange = () => {
    return [`${fromDeg}deg`, `${toDeg}deg`];
  };
  const [waveAnim] = useState(new Animated.Value(0));

  const interpolateRotation = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: getOutputRange(),
  });
  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  };
  const runAnimation = () => {
    Animated.timing(waveAnim, {
      toValue: waveDirectionRight ? 1 : 0,
      duration: 500,

      useNativeDriver: true,
    }).start(() => {
      setWaveDirectionRight(!waveDirectionRight);
    });
  };

  useEffect(() => {
    runAnimation();
  }, [waveDirectionRight]);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default WaveView;
