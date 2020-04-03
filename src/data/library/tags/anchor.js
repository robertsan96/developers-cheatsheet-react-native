export default {
  title: "Anchor",
  shortDescription: "Represents a link.",
  language: "html",
  tag: "<a></a>",
  articleBlocks: [
    {
      type: "ARTICLE_BLOCK_TYPE_SECTION",
      title: "Description",
      data: [
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Definition"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "An anchor represents a hyperlink (known as Links, Text Links). " +
            "A hyperlink is just a simple mechanism of linking web pages and content. " +
            "It allows users to navigate between websites by clicking on text, images, " +
            "phrases, menu elements etc."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Notes"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "Hyperlinks are always blue. " +
            "The href attribute is essential when in specifying the desired destination " +
            "when accessing the hyperlink. If the href attribute is not used, neither " +
            "other attributes can be used such as target, media, download etc. \n\n" +
            "The hyperlink is by default linked to the current browsing window when accessing it, but it could be changed to a different window."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Element"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_CODE",
          language: "html",
          data: "<a href='https://www.google.com'>To Google</a>"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Rendered"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_WEBVIEW",
          webViewHeight: 150,
          data: "<a href='https://www.google.com'>To Google</a>"
        }
      ]
    },
    {
      type: "ARTICLE_BLOCK_TYPE_SECTION",
      title: "Support",
      data: [
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Browser"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST",
          data: [
            {
              element: "Chrome",
              definition: "supported"
            },
            {
              element: "Firefox",
              definition: "supported"
            },
            {
              element: "IE",
              definition: "supported"
            },
            {
              element: "Opera",
              definition: "supported"
            },
            {
              element: "Safari",
              definition: "supported"
            }
          ]
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "HTML Versions"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST",
          data: [
            {
              element: "HTML4.01",
              definition: "supported"
            },
            {
              element: "HTML5",
              definition: "supported"
            }
          ]
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Default CSS Settings"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_CODE",
          language: "css",
          data: "address { display: block; font-style: italic; }"
        }
      ]
    },
    {
      type: "ARTICLE_BLOCK_TYPE_SECTION",
      title: "Examples",
      data: [
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Author of the article"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "In this example we will set the author of an article. " +
            "Notice that the <address> element is inside an <article> element."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_CODE",
          language: "html",
          data:
            "<body>\n\t" +
            "<article>\n\t\t" +
            "<address>\n\t\t\t" +
            "Robert Doe.\n\t\t\t" +
            "Timisoara, Romania.\n\t\t" +
            "</address>\n\t" +
            "</article>\n" +
            "</body>"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data: "The code above will be rendered as: "
        },
        {
          type: "ARTICLE_BLOCK_TYPE_WEBVIEW",
          webViewHeight: 40,
          data:
            "<body>\n\t" +
            "<article>\n\t\t" +
            "<address>\n\t\t\t" +
            "Robert Doe.\n\t\t\t" +
            "Timisoara, Romania.\n\t\t" +
            "</address>\n\t" +
            "</article>\n" +
            "</body>"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Author of the document"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "In this example we will set the author of a document. Notice that " +
            "we add the <address> element directly inside the <body> element. "
        },
        {
          type: "ARTICLE_BLOCK_TYPE_CODE",
          language: "html",
          data:
            "<body>\n\t" +
            "<address>\n\t\t" +
            "Robert Doe.\n\t\t" +
            "Timisoara, Romania.\n\t" +
            "</address>\n" +
            "</body>"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "The code above will be rendered just as the article contact information."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_WEBVIEW",
          webViewHeight: 40,
          data:
            "<body>\n\t" +
            "<address>\n\t\t" +
            "Robert Doe.\n\t\t" +
            "Timisoara, Romania.\n\t" +
            "</address>\n" +
            "</body>"
        }
      ]
    }
  ]
};
