import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors, { THEMES } from "../constants/colors";
import WaveView from "../components/animations/WaveView";
import FadeInView from "../components/animations/FadeInView";
import SlideInView from "../components/animations/SlideInView";
import Logo from "../components/Logo";
import OutlineButton from "../components/buttons/OutlineButton";

const IntroScreen = () => {
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
          <Text style={styles.text2}>Welcome to Developer's Cheatsheet!</Text>
        </SlideInView>
      </FadeInView>
      <FadeInView>
        <SlideInView time={650}>
          <WaveView>
            <MaterialCommunityIcons
              size={65}
              name="hand"
              color={colors.WHITE.hex}
            />
          </WaveView>
        </SlideInView>
      </FadeInView>
      <FadeInView>
        <SlideInView time={650}>
          <Text style={styles.text2}>
            We're proud having you onboard! We'll show you some of the app's
            functionality right now.
          </Text>
        </SlideInView>
      </FadeInView>
      <FadeInView style={{ marginTop: 40 }}>
        <SlideInView time={650}></SlideInView>
      </FadeInView>
      <FadeInView style={{ marginTop: 10 }}>
        <SlideInView time={700}>
          <OutlineButton text="CONTINUE" />
        </SlideInView>
      </FadeInView>
      <FadeInView time={2500} style={{ marginTop: 40 }}>
        <SlideInView time={900}>
          <TouchableOpacity>
            <Text style={styles.text3}>Skip to the app...</Text>
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
export default IntroScreen;
