import React from "react";
import { useColorScheme } from "react-native-appearance";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import {
  darcula as prismDark,
  prism as prismLight
} from "react-syntax-highlighter/dist/styles/prism";

export const ArticleBlockCodeView = ({ block }) => {
  const colorSchema = useColorScheme();
  const snippetViewColor = () => {
    return colorSchema === "light" ? prismLight : prismDark;
  };
  return (
    <SyntaxHighlighter
      language={block.language}
      highlighter="prism"
      style={snippetViewColor()}
    >
      {block.data}
    </SyntaxHighlighter>
  );
};

export default ArticleBlockCodeView;
