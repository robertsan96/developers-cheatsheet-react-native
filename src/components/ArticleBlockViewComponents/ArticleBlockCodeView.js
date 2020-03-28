import React from "react";
import SyntaxHighlighter from "react-native-syntax-highlighter";

export const ArticleBlockCodeView = ({ block }) => {
  return (
    <SyntaxHighlighter wrapLines language={block.language} highlighter="prism">
      {block.data}
    </SyntaxHighlighter>
  );
};

export default ArticleBlockCodeView;
