import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
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
        <View style={styles.webViewButtonsRow}>
          <View style={styles.webViewButton}>
            <MaterialCommunityIcons
              size={18}
              name={"reload"}
              color={PRIMARY_COLOR.hex}
            />
            <Text>Reload</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  webView: {
    width: "100%"
  },
  webViewButtonsRow: {
    flexDirection: "row",
    padding: 10
  },
  webViewButton: {
    flexDirection: "row",
    alignContent: "space-between",
    alignSelf: "baseline"
  }
});

export default ArticleBlockWebView;
