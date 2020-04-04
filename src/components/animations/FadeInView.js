import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

const FadeInView = ({ time = 1000, style, children }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: time,
    }).start();
  }, []);

  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
