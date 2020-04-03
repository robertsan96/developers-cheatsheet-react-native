export default {
  title: "Address",
  shortDescription: "Represents contact information.",
  language: "html",
  tag: "<dd></dd>",
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
            "The <address> tag provides author information about one document or article."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "If the <address> element is inside the <body> element, it represents contact information for the document."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "If the <address> element is inside the <article> element, it represents the contact information for that article."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Notes"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "The text inside the <address> element usually renders in italic. Most browsers will " +
            "add a line break before and after the address element."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT",
          data:
            "The text inside the <address> element can anything that can be used " +
            "as contact information. Some examples can be websites, emails, phone numbers " +
            "or an real world address."
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Element"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_CODE",
          language: "html",
          data: "<address>Timisoara, Romania</address>"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
          data: "Rendered"
        },
        {
          type: "ARTICLE_BLOCK_TYPE_WEBVIEW",
          webViewHeight: 40,
          data: "<address>Timisoara, Romania</address>"
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
              definition: "not supported"
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
              element: "HTML 4.01",
              definition:
                "in HTML4.01 the <article> tag is not supported, so if <address> is used, it will only represent the author of the document."
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
