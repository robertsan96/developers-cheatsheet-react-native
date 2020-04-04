import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";

import colors, { THEMES } from "../constants/colors";
import Logo from "../components/Logo";
import FacebookButton from "../components/buttons/FacebookButton";
import FadeInView from "../components/animations/FadeInView";
import SlideInView from "../components/animations/SlideInView";
import GoogleButton from "../components/buttons/GoogleButton";

const LoginScreen = () => {
  StatusBar.setBarStyle("light-content");

  return (
    <View style={styles.wrapper}>
      <FadeInView style={styles.logoWrapper}>
        <SlideInView>
          <Logo />
        </SlideInView>
      </FadeInView>

      <FadeInView style={{ marginTop: 100 }}>
        <SlideInView time={500}>
          <Text style={styles.text1}>Hello!</Text>
        </SlideInView>
      </FadeInView>
      <FadeInView>
        <SlideInView time={600}>
          <Text style={styles.text2}>
            By logging in, you'll be able to enjoy Developer's Cheatsheet
            goodies at their max!
          </Text>
        </SlideInView>
      </FadeInView>
      <FadeInView style={{ marginTop: 40 }}>
        <SlideInView time={650}>
          <TouchableOpacity>
            <FacebookButton />
          </TouchableOpacity>
        </SlideInView>
      </FadeInView>
      <FadeInView style={{ marginTop: 10 }}>
        <SlideInView time={700}>
          <TouchableOpacity>
            <GoogleButton />
          </TouchableOpacity>
        </SlideInView>
      </FadeInView>
      <FadeInView time={2500} style={{ marginTop: 40 }}>
        <SlideInView time={900}>
          <TouchableOpacity>
            <Text style={styles.text3}>Continue without sign in...</Text>
          </TouchableOpacity>
        </SlideInView>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEMES.DEFAULT.dark.PRIMARY_BACKGROUND_COLOR.hex,

    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    width: 240,
    transform: [],
  },
  text1: {
    fontWeight: "200",
    fontSize: 32,
    color: colors.WHITE.hex,
  },
  text2: {
    padding: 20,
    marginTop: 20,
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    color: colors.WHITE.hex,
  },
  text3: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    color: colors.DARK_GREY.hex,
  },
});

export default LoginScreen;
