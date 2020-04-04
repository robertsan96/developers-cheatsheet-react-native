import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../constants/colors";
import ProviderButton from "./ProviderButton";

const GoogleButton = () => {
  const provider = { name: "Google", color: colors.GOOGLE_RED };
  return <ProviderButton provider={provider} />;
};

export default GoogleButton;
