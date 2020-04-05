import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../constants/colors";
import ProviderButton from "./ProviderButton";

const FacebookButton = ({ onPress = () => {} }) => {
  const provider = { name: "Facebook", color: colors.FACEBOOK_BLUE };
  return <ProviderButton onPress={onPress} provider={provider} />;
};

export default FacebookButton;
