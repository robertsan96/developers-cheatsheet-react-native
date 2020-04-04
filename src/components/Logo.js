import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../constants/colors";

const Logo = () => {
  const [blinkingProgress, setBlikingProgress] = useState(false);
  const [iconShown, setIconShown] = useState(true);
  useEffect(() => {
    if (blinkingProgress) return;
    setBlikingProgress(true);
    setTimeout(() => {
      setBlikingProgress(false);
      setIconShown(!iconShown);
    }, 200);
  }, [iconShown, blinkingProgress]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.line1Wrapper}>
        <Text style={styles.line1} adjustsFontSizeToFit>
          DEVELOPER'S
        </Text>
      </View>
      <View style={styles.line2Wrapper}>
        {iconShown && (
          <MaterialCommunityIcons
            size={28}
            name="code-less-than"
            color={colors.WHITE.hex}
          />
        )}

        <Text style={styles.line2}>HEATSHEET</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  line1Wrapper: {},
  line1: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 8,
    textAlign: "right",
    color: colors.WHITE.hex,
  },
  line2Wrapper: {
    width: "100%",
    height: 30,

    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  line2: {
    fontSize: 22,
    fontWeight: "200",
    color: colors.WHITE.hex,
    letterSpacing: 4,
  },
});

export default Logo;
