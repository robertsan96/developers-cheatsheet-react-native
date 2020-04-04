import React, { useState, useEffect } from "react";

import { Animated } from "react-native";

const SlideInView = ({ style, children, time = 200, animationDone }) => {
  const [slideInAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    Animated.timing(slideInAnim, {
      toValue: 0,
      duration: time,
    }).start(animationDone);
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateX: slideInAnim }] }}>
      {children}
    </Animated.View>
  );
};

export default SlideInView;
