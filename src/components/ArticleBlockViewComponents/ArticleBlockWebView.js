import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { PRIMARY_COLOR, GRAY } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ArticleBlockWebView = ({ block }) => {
  const [webViewReloadKey, setWebViewReloadKey] = useState(Math.random());
  const reload = () => {
    setWebViewReloadKey(Math.random);
  };
  const webViewComponent = () => {
    return (
      <WebView
        key={webViewReloadKey}
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        style={{ ...styles.webView, height: block.webViewHeight }}
        originWhitelist={["*"]}
        source={{ html: block.data }}
      />
    );
  };

  return (
    <View style={{ borderColor: GRAY.hex, borderWidth: 1 }}>
      {webViewComponent()}
      <TouchableOpacity onPress={reload}>
        <MaterialCommunityIcons
          size={32}
          name={"reload"}
          color={PRIMARY_COLOR.hex}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  webView: {
    width: "100%"
  }
});

export default ArticleBlockWebView;
