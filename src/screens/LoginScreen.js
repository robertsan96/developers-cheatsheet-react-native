import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import colors, { THEMES } from "../constants/colors";
import Logo from "../components/Logo";

import FadeInView from "../components/animations/FadeInView";
import SlideInView from "../components/animations/SlideInView";

import { TextInput } from "react-native-gesture-handler";

import * as firebase from "firebase";

const LoginScreen = () => {
  StatusBar.setBarStyle("light-content");

  const [email, setEmail] = useState("robertsandru96@gmail.com");
  const [password, setPassword] = useState("roberst");

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(authStateChanged);
  }, []);

  const authStateChanged = (user) => {};

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (da) => {
          console.log(da);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
          <TextInput value={email} />
        </SlideInView>
      </FadeInView>
      <FadeInView style={{ marginTop: 10 }}>
        <SlideInView time={700}>
          <TouchableOpacity onPress={() => console.log("google login")}>
            <TextInput value={password} />
          </TouchableOpacity>
        </SlideInView>
      </FadeInView>
      <FadeInView time={2500} style={{ marginTop: 40 }}>
        <SlideInView time={900}>
          <TouchableOpacity onPress={login}>
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
