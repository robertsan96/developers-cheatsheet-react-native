import articleBlockType from "../../constants/article-block";

export default [
  {
    id: 1,
    title: "Introduction",
    data: [
      {
        id: 1,
        title: "About HTML",
        shortDescription: "What is HTML, how and where to use it.",
        language: undefined,
        tag: undefined,
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Hypertext Markup Language (HTML) is the standard markup language that's designed to build web pages. \n\n" +
              "It is easily integrated with technologies such as Cascading Style Sheets (CSS) and scripting languages such " +
              "as JavaScript, TypeScript, CoffeeScript etc.\n\n" +
              "Mastering HTML will help you build awesome structured websites, get a web development job or even earn some extra " +
              "revenue as a freelancer. It's easy to learn and you don't have to dig hours in order to fix problems."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Some quick informations: \n\n" +
              "- HTML comes from Hyper Text Markup Language \n" +
              "- HTML is built as a series of elements \n" +
              "- HTML is dictating the structure of a webpage \n" +
              "- HTML is rendered by the browser. That's why we see images and not <img />."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "HTML Examples:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Headings are used for article titles and subtitles. There are 6 levels of headings. " +
              "Bigger the number, smaller the text."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<h1>This is heading 1</h1>\n" +
              "<h2>This is heading 2</h2>\n" +
              "<h3>This is heading 3</h3>\n" +
              "<h4>This is heading 4</h4>\n" +
              "<h5>This is heading 5</h5>\n" +
              "<h6>This is heading 6</h6>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The HTML code above will render the following content on screen:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 280,
            data:
              "<h1>This is heading 1</h1>" +
              "<h2>This is heading 2</h2>" +
              "<h3>This is heading 3</h3>" +
              "<h4>This is heading 4</h4>" +
              "<h5>This is heading 5</h5>" +
              "<h5>This is heading 6</h6>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Another good example is how images are working. Have a look at the code below."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<img alt='HTML5 Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' />"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "This code will render us a HTML5 Logo image on screen. Notice that inside the self closing <img /> tag we have the 'alt' and 'src' attributes. \n\n" +
              "- alt: if the image fails to load, an ,,alternative'' text will be shown. The text is rendered from the 'alt' tag.\n" +
              "- src: the url of the image. We found this stunning HTML5 logo on Wikipedia, so we load it here."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 170,
            data:
              "<img width='150' alt='HTML5 Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' />"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Tables are also a heavily used element in HTML. They help us structure data in columns and rows and they do it without too much of code."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<table border='1'>\n" +
              " <thead>\n" +
              "   <tr>\n" +
              "     <th scope='col'>Items</th>\n" +
              "     <th scope='col'>Price</th>\n" +
              "   </tr>\n" +
              " </thead>\n" +
              " <tbody>\n" +
              "   <tr>\n" +
              "     <td>iPhone 11 PRO</td>\n" +
              "     <td>1500$</td>\n" +
              "   </tr>\n" +
              "   <tr>\n" +
              "     <td>Samsung Galaxy Fold</td>\n" +
              "     <td>2000$</td>\n" +
              "   </tr>\n" +
              " </tbody>\n" +
              "</table>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The code above will be rendered by the browser. Have a look about how useful can a table be. Imagine listing millions of products."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 100,
            data:
              "<table border='1'>\n" +
              " <thead>\n" +
              "   <tr>\n" +
              "     <th scope='col'>Items</th>\n" +
              "     <th scope='col'>Price</th>\n" +
              "   </tr>\n" +
              " </thead>\n" +
              " <tbody>\n" +
              "   <tr>\n" +
              "     <td>iPhone 11 PRO</td>\n" +
              "     <td>1500$</td>\n" +
              "   </tr>\n" +
              "   <tr>\n" +
              "     <td>Samsung Galaxy Fold</td>\n" +
              "     <td>2000$</td>\n" +
              "   </tr>\n" +
              " </tbody>\n" +
              "</table>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "We hope this short article gave you a basic taste of HTML. Next, navigate throught the app and enjoy learning! 🍺"
          }
        ]
      },
      {
        id: 2,
        title: "Coding prerequisites",
        shortDescription:
          "We will guide you setting up your coding environment on Windows, Linux or macOS.",
        language: undefined,
        tag: undefined,
        articleBlocks: []
      },
      {
        id: 3,
        title: "HTML Elements",
        shortDescription:
          "What is a HTML element, nested elements, self closing elements and so.",
        language: undefined,
        tag: undefined,
        articleBlocks: []
      },
      {
        id: 3,
        title: "HTML Attributes",
        shortDescription:
          "Attributes provide additional information about HTML elements.",
        language: undefined,
        tag: undefined,
        articleBlocks: []
      }
    ]
  },
  {
    id: 2,
    title: "HTML Tags & Instructions",
    data: [
      {
        id: 92324,
        title: "Address",
        shortDescription: "Defines contact information.",
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
                  "If the <address> element is inside the <body> element, it represents " +
                  "contact information for the document."
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT",
                data:
                  "If the <address> element is inside the <article> element, it represents " +
                  "the contact information for that article."
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
                data: "Notes"
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT",
                data:
                  "The text inside the <address> tag element usually renders in italic. Most browsers will add " +
                  "a line break before and after the address element."
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
                data: "Element"
              },
              {
                type: "ARTICLE_BLOCK_TYPE_CODE",
                language: "html",
                data: React
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
                      "in HTML4.01 the <article> tag is not supported, so if <address> is used, " +
                      "it will only represent the author of the document."
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
                data: "In this example we will set the author of an article."
              },
              {
                type: "ARTICLE_BLOCK_TYPE_CODE",
                language: "html",
                data: "<article><address>Robert Sandru</address></article>"
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT_HEADING",
                data: "Author of the document"
              },
              {
                type: "ARTICLE_BLOCK_TYPE_TEXT",
                data: "In this example we will set the author of a document."
              },
              {
                type: "ARTICLE_BLOCK_TYPE_CODE",
                language: "html",
                data: "<body><address>Robert Sandru</address></body>"
              }
            ]
          }
        ]
      },
      {
        id: 900,
        title: "Comments",
        shortDescription:
          "Comments is a piece of code that is totally ignored by any browser.",
        language: "html",
        tag: "<!-- ... -->",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Introduction"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Comments is a piece of code that is totally ignore by any browser. " +
              "This means that anything you write and put between the <!-- --> tags is not " +
              "going to be rendered on the screen."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<h1>Hello, Code Contriver!</h1>\n" +
              "<!-- <p>Our users are great</p> -->"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Not only any modern code editor will turn the code into gray, " +
              "the user will also see just a big welcome heading just like in the example below:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 50,
            data: "<h1>Hello, Code Contriver!</h1>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Nesting"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Comments do not nest! Having that said, you have to be aware not to add " +
              "'comments in comments'."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<!-- this is a valid comment -->"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<!-- this is not <!-- a valid comment --> -->"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            language: "html",
            data:
              "You can notice that even the intellisense is proving us that the second " +
              "comment is not a valid one, because the last --> is black and noy gray."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Multiline Comments"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "While it's not valid to nest comments, you can comment multiple lines " +
              "and multiple tags at once."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<!--<h1>This comment is valid</h1><h2>I'm out, too! 😢</h2>-->"
          }
        ]
      },
      {
        id: 901,
        title: "DOCTYPE",
        shortDescription:
          "DOCTYPE is used to specify which HTML version the document is using.",
        language: "html",
        tag: "<!DOCTYPE html>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "DOCTYPE is used to specify which HTML version the document is using. " +
              "It is placed at the top of the HTML document.\n\n" +
              "Notice that doctype declaration doesn't have an ending tag."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Declaration"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "HTML 5 declaration"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<!DOCTYPE html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Also, this declaration is not visible to the user. It is just to communicate " +
              "with the browser. It won't produce any element on the screen."
          }
        ]
      },
      {
        id: 902,
        title: "Hyperlink",
        shortDescription: "A hyperlink is a mechanism of linking pages.",
        language: "html",
        tag: "<a></a>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Hyperlinks (knows as Links, Text Links) are just a simple mechanism of linking " +
              "web pages and content. They allow users to navigate between websites " +
              "by clicking on text, images, phrases, menu elements etc."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Linking Pages"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "To create a link, you must use the <a></a> HTML tag. This tag is called " +
              "anchor tag and anything between the opening and the closing tag becomes clickable. \n" +
              "Notice the use of href attribute. In order to tell the browser that this anchor " +
              "is clickable, we have to fill the href attribute."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<a href='#'>Creating an anchor</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "This will produce the following result. It's not taking us anywhere because we didn't " +
              "set href to point to another location."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 40,
            data: "<a href='#'>Creating an anchor</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Linking Images"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "We said above that anything between the opening <a> and closing </a> tags is clickable " +
              "and we've added some basic text into it. We can also add another HTML elements, too! " +
              "Let's add a clickable HTML5 logo that will redirect us to Google!"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<a href='https://www.google.com/'>\n" +
              "\t<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' /> \n" +
              "</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 150,
            data:
              "<a href='https://www.google.com/'>\n" +
              "\t<img width='100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' /> \n" +
              "</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute: target"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "_blank",
                definition:
                  "opens the linked document in a new window or a new tab."
              },
              {
                element: "_self",
                definition: "opens the linked document in the same frame."
              },
              {
                element: "",
                definition: "opens the linked document in the parent frame."
              },
              {
                element: "_top",
                definition:
                  "opens the linked document on top the current document."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<a href='https://google.com/' target='_blank'>\n\tNew Google Tab\n</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute: type"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "text/html",
                definition:
                  "informs the browser that the linked document is a HTML document."
              },
              {
                element: "text/css",
                definition:
                  "informs the browser that the linked document is a CSS document."
              },
              {
                element: "text/javascript",
                definition:
                  "informs the browser that the linked document is a scripting document."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "For more types, check you IANA Media Types."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute: referrerpolicy"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "no-referrer",
                definition: undefined
              },
              {
                element: "no-referrer-when",
                definition: undefined
              },
              {
                element: "downgrade",
                definition: undefined
              },
              {
                element: "origin",
                definition: undefined
              },
              {
                element: "unsafe-url",
                definition: undefined
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute: rel"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The rel attribute specifies the relationship between the linked document and the current document."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "author",
                definition:
                  "The linked document represents details about the author."
              },
              {
                element: "bookmark",
                definition: "The linked document is a bookmark."
              },
              {
                element: "external",
                definition:
                  "The linked document is external. Usually cross-domain."
              },
              {
                element: "help",
                definition: "The linked document is a help-like document."
              },
              {
                element: "license",
                definition: "The linked document reperesents a license."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Examples"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "The code below will open Google in a new window or tab."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<a href='https://google.com/' target='_blank'>\n\tNew Google Tab\n</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The code below will make an image clickable. Once clicked, the user will be redirected in a " +
              "new tab to Wikipedia."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<a href='https://google.com/' target='_blank'>\n" +
              "\t<img src='image.jpg' alt='Locally loaded image.'/>\n</a>"
          }
        ]
      },
      {
        id: 903,
        title: "Abbreviation",
        shortDescription:
          "Will help search engines understand better your page's content.",
        language: "html",
        tag: "<abbr></abbr>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Abbreviations are just shortened forms of words or phrases and they may " +
              "be used to save space and time, to avoid repetition of long words and phrases, " +
              "or simply to conform to conventional usage. Thinking of you as a web developer, " +
              "you might want to conform to conventional usage and write OMW in articles instead of " +
              "on my way! Anyway, you'll simplify the read of your users, not the code. \n\n" +
              "In order to improve SEO and make browsing engines understand your abbreviations, " +
              "it's always a good idea to add explanations!"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<p>I'm <abbr title='On My Way'>OMW</abbr>!</p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "The result of the code above is:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 40,
            data: "<p>I'm <abbr title='On My Way'>OMV</abbr>!</p>"
          }
        ]
      },
      {
        id: 904,
        title: "Address",
        shortDescription:
          "Define contact information for the author of the document or article.",
        language: "html",
        tag: "<address></address>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The address element provides information about authors. If the element is placed " +
              "inside the <body> element, the data is considered to be the author of the document. " +
              "Otherwise, if placed in an <article> element, it's considered to provide author information " +
              "for that article."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Document Author"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The following code will set the author details of the document."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<!DOCTYPE html>\n" +
              "<html>\n\t" +
              "<head>\n\t\t" +
              "<title>Things to visit in Timisoara.</title>\n\t" +
              "</head>\n\t" +
              "<body>\n\t\t" +
              "This is John's website\n\t\t" +
              "<address>\n\t\t" +
              "\tWritten by John.\n\t\t" +
              "\tExample.com.\n\t\t" +
              "\tTimisoara, Romania\n\t\t" +
              "</address>\n\t" +
              "</body>\n" +
              "</html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 50,
            data:
              "<!DOCTYPE html>\n" +
              "<html>\n\t" +
              "<head>\n\t\t" +
              "<title>Things to visit in Timisoara.</title>\n\t" +
              "</head>\n\t" +
              "<body>\n\t\t" +
              "This is John's website\n\t\t" +
              "<address>\n\t\t" +
              "\tWritten by John.\n\t\t" +
              "\tExample.com.\n\t\t" +
              "\tTimisoara, Romania\n\t\t" +
              "</address>\n\t" +
              "</body>\n" +
              "</html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Article Author"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The following code will set the author details of the article."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<!DOCTYPE html>\n" +
              "<html>\n\t" +
              "<head>\n\t\t" +
              "<title>Things to visit in Timisoara.</title>\n\t" +
              "</head>\n\t" +
              "<body>\n\t\t" +
              "This is John's website.\n\t\t" +
              "<article>\n\t\t\t" +
              "This is Andrew's awesome article.\n\t\t\t" +
              "<address>\n\t\t\t" +
              "\tWritten by Andrew.\n\t\t\t" +
              "\tExample.com.\n\t\t\t" +
              "\tTimisoara, Romania\n\t\t\t" +
              "</address>\n\t\t" +
              "</article>\n\t" +
              "</body>\n" +
              "</html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 70,
            data:
              "<!DOCTYPE html>\n" +
              "<html>\n\t" +
              "<head>\n\t\t" +
              "<title>Things to visit in Timisoara.</title>\n\t" +
              "</head>\n\t" +
              "<body>\n\t\t" +
              "This is John's website.\n\t\t" +
              "<article>\n\t\t\t" +
              "This is Andrew's awesome article.\n\t\t\t" +
              "<address>\n\t\t\t" +
              "\tWritten by Andrew.\n\t\t\t" +
              "\tExample.com.\n\t\t\t" +
              "\tTimisoara, Romania\n\t\t\t" +
              "</address>\n\t\t" +
              "</article>\n\t" +
              "</body>\n" +
              "</html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "You can also set an author for the document and an author for an article."
          }
        ]
      },
      {
        id: 905,
        title: "Area",
        shortDescription: "Define a clickable area inside an image-map.",
        language: "html",
        tag: "<area>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Using an image-map, one can easily click on certain areas of an image. " +
              "Having this feature out of the box, you can create awesome explained content."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Let's map"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "We're going to use Google's logo in this example. Looking at the code below, " +
              "you'll notice that we loaded an image using the <img /> element and added the " +
              "following attributes: a width of 200px, a height of 70px, an alternate text just " +
              "in case the image doesn't load anymore, and the most important for our example, " +
              "the usemap attribute. The attribute value must reflect the name of the map " +
              "with a hashtag before."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "After the image, there is a map element with the name attribute with an area element inside."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<img\n\t" +
              "src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'\n\t" +
              "width='200'\n\t" +
              "height='70'\n\t" +
              "alt='Google Logo'\n\t" +
              "usemap='#googlemap'" +
              "/>\n" +
              "<map name='googlemap'>\n\t" +
              "<area\n\t\t" +
              "shape='rect'\n\t\t" +
              "coords='0, 0, 50, 70'\n\t\t" +
              "alt='G'\n\t\t" +
              "href='https://www.google.com/'" +
              "/>\n" +
              "</map>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Running this example, we will get a Google logo with a clickable area. The zone " +
              "you can click on, is the G letter. Once clicked, the user is going to be redirected " +
              "to Google."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 150,
            data:
              "<img\n\t" +
              "src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'\n\t" +
              "width='200'\n\t" +
              "height='70'\n\t" +
              "alt='Google Logo'\n\t" +
              "usemap='#googlemap'" +
              "/>\n" +
              "<map name='googlemap'>\n\t" +
              "<area\n\t\t" +
              "shape='rect'\n\t\t" +
              "coords='0, 0, 50, 70'\n\t\t" +
              "alt='G'\n\t\t" +
              "href='https://www.google.com/'" +
              "/>\n" +
              "</map>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attributes"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "alt",
                definition: "Alternate text for the area."
              },
              {
                element: "coords",
                definition:
                  "The shape of the area will be created at these coordinates."
              },
              {
                element: "download",
                definition:
                  "The target will be downloaded when the user clicks on the area."
              },
              {
                element: "href",
                definition: "The address for the area."
              },
              {
                element: "hreflang",
                definition: "Language of the target address."
              },
              {
                element: "media",
                definition: undefined
              },
              {
                element: "rel",
                definition:
                  "Relationship between the current document and target."
              },
              {
                element: "shape",
                definition: "The shape type of the area."
              },
              {
                element: "target",
                definition: "Where to open the target."
              },
              {
                element: "type",
                definition: "Media type of the target."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute shape"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "rect",
                definition: "The shape of the area will be a rectangle."
              },
              {
                element: "circle",
                definition: "The shape of the area will be a circle."
              },
              {
                element: "poly",
                definition: "The shape of the area will be a polygon."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute rel"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "author",
                definition:
                  "The linked document represents details about the author."
              },
              {
                element: "bookmark",
                definition: "The linked document is a bookmark."
              },
              {
                element: "external",
                definition:
                  "The linked document is external. Usually cross-domain."
              },
              {
                element: "help",
                definition: "The linked document is a help-like document."
              },
              {
                element: "license",
                definition: "The linked document reperesents a license."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute target"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "_blank",
                definition:
                  "opens the linked document in a new window or a new tab."
              },
              {
                element: "_self",
                definition: "opens the linked document in the same frame."
              },
              {
                element: "",
                definition: "opens the linked document in the parent frame."
              },
              {
                element: "_top",
                definition:
                  "opens the linked document on top the current document."
              }
            ]
          }
        ]
      },
      {
        id: 906,
        title: "Article",
        shortDescription: "Define a self-contained article.",
        language: "html",
        tag: "<article></article>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "One article must be independent as content from the rest of the page. " +
              "Defined articles should be shared independently."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Even if the user doesn't see any difference, crawlers and browsers definitely do. " +
              "Robots will correctly index your website so you SEO (Search Engine Optimization) will be improved."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Let's write"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "We are going to define two independent articles below."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<article>\n\t" +
              "<h4>iPhone 11 PRO MAX</h4>\n\t" +
              "<p>One of the major Apple products in 2019</p> \n" +
              "</article>\n" +
              "<article>\n\t" +
              "<h4>Samsung Galaxy Note 10</h4>\n\t" +
              "<p>Samsung just released the new Galaxt Note.</p> \n" +
              "</article>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The output of the following code is simply made of two headings and two paragraphs."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 180,
            data:
              "<article>\n\t" +
              "<h4>iPhone 11 PRO MAX</h4>\n\t" +
              "<p>One of the major Apple products in 2019</p> \n" +
              "</article>\n" +
              "<article>\n\t" +
              "<h4>Samsung Galaxy Note 10</h4>\n\t" +
              "<p>Samsung just released the new Galaxt Note.</p> \n" +
              "</article>"
          }
        ]
      },
      {
        id: 907,
        title: "Aside",
        shortDescription:
          "Define a portion of a document whose content is indirectly related to the main content.",
        language: "html",
        tag: "<aside></aside>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The <aside> element helps us add some content that is indirectly related to the main content. " +
              "This means that if you write an article about how to capture pictures correctly on Apple devices, " +
              "you could create an aside element to add some extra information about the device you were referring to."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Example"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<p>\n\t" +
              "In order to capture incredible photos \n\t" +
              "on the new iPhone, open the Camera App, \n\t" +
              "focus on the subject and capture!\n" +
              "</p>\n" +
              "<aside>\n\t" +
              "<h5>iPhone 11 PRO Max</h5>\n\t" +
              "<p>\n\t\t" +
              "iPhone 11 PRO Max is the latest \n\t\t" +
              "flagship from Apple with 3 cameras \n\t" +
              "</p>\n" +
              "</aside>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "The code above will render as that:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 200,
            data:
              "<p>\n\t" +
              "In order to capture incredible photos \n\t" +
              "on the new iPhone, open the Camera App, \n\t" +
              "focus on the subject and capture!\n" +
              "</p>\n" +
              "<aside>\n\t" +
              "<h5>iPhone 11 PRO Max</h5>\n\t" +
              "<p>\n\t\t" +
              "iPhone 11 PRO Max is the latest \n\t\t" +
              "flagship from Apple with 3 cameras \n\t" +
              "</p>\n" +
              "</aside>"
          }
        ]
      },
      // {
      //   id: 908,
      //   title: "Audio",
      //   shortDescription: "Defines music or other audio streams.",
      //   language: "html",
      //   tag: "<audio>Gaming on Linux</audio>",
      //   articleBlocks: []
      // },
      {
        id: 909,
        title: "Bold",
        shortDescription: "Defines a portion of text that has to be bolded.",
        language: "html",
        tag: "<b></b>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Bold text will help you make some text heavy. This way, " +
              "your users will easily evidentiate important points of the document."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Example"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<p>This is <b>so important</b> for me</p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data: "When rendered, the text will become:"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 30,
            data: "<p>This is <b>so important</b> for me</p>"
          }
        ]
      },
      {
        id: 910,
        title: "Base",
        shortDescription:
          "Defines the base URL of the document, making relative URLs a breeze.",
        language: "html",
        tag: "<base>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "In order to use relative URLs correctly, you have to define the base URL " +
              "in the document head, so the browser will know how to compute routes."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "absolute url",
                definition:
                  "the exact, full path of the resource \n" +
                  "https://example.com/chairs"
              },
              {
                element: "relative url",
                definition:
                  "shorter, more convenient and portable \n" +
                  "base url + chairs"
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Absolute vs Relative"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The following example shows the difference between using the absolute " +
              "path and relative path. Using relative path is easier and more convenient " +
              "because it's portable. Imagine moving your website from one domain to another " +
              "and by using absolute paths, you would have to go in all your files and change href " +
              "and image sources."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<!-- Absolute URL --> \n" +
              "<a href='http://example.com/chairs'>Chairs</a>\n\n" +
              "<!-- Relative URL -->\n" +
              "<a href='chairs'>Chairs</a>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "Anyway, in order to make relative URLs work correctly, you have to add the base element " +
              "in the head of the document."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Example"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<!DOCTYPE html>\n" +
              "<html>\n\t" +
              "<head>\n\t\t" +
              "<title>Test</title>\n\t\t" +
              "<base href='http://example.com/' />\n\t" +
              "</head>\n\t" +
              "<body>\n\t\t" +
              "<!-- This route will point to: \n\t\t https://example.com/chairs -->\n\t\t" +
              "<a href='chairs'>Chairs</a>\n\t" +
              "</body>\n" +
              "</html>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attributes"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "href",
                definition: "your website's url: https://example.com/"
              },
              {
                element: "target",
                definition:
                  "specifying the target in the base element, all the anchors in " +
                  "the document will inherit it."
              }
            ]
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attributes target"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "_blank",
                definition:
                  "opens the linked document in a new window or a new tab."
              },
              {
                element: "_self",
                definition: "opens the linked document in the same frame."
              },
              {
                element: "_parent",
                definition: "opens the linked document in the parent frame."
              },
              {
                element: "_top",
                definition:
                  "opens the linked document on top the current document."
              }
            ]
          }
        ]
      },
      {
        id: 911,
        title: "Bi-Directional Isolation",
        shortDescription:
          "Defines a portion of a text that might be formatted in a different direction.",
        language: "html",
        tag: "<bdi></bdi>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "The <bdi> element helps isolating (usually) user defined input that might " +
              "be formatted in different directions. Some languages are written from right to left. "
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Example"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data: "<p><bdi>This هاتف is just awesome.</bdi></p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 40,
            data: "<p><bdi>This هاتف is just awesome.</bdi></p>"
          }
        ]
      },
      {
        id: 9951,
        title: "Bi-Directional Override",
        shortDescription:
          "Defines a portion of a text that should be formatted in a defined direction.",
        language: "html",
        tag: "<bdo dir='rtl'></bdo>",
        articleBlocks: [
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT,
            data:
              "When working with (especially) with user defined input, you might " +
              "want to make sure that the text is in the correct direction."
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Example"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<p>\n\t<bdo dir='rtl'>\n\t\tThis text is from right to left\n\t</bdo>\n</p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 40,
            data: "<p><bdo dir='rtl'>This text is from right to left</bdo></p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_CODE,
            language: "html",
            data:
              "<p>\n\t<bdo dir='rtl'>\n\t\tThis text is from left to right\n\t</bdo>\n</p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_WEBVIEW,
            webViewHeight: 40,
            data: "<p><bdo dir='ltr'>This text is from left to right</bdo></p>"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_HEADING,
            data: "Attribute dir"
          },
          {
            type: articleBlockType.ARTICLE_BLOCK_TYPE_TEXT_DEFINITION_LIST,
            data: [
              {
                element: "ltr",
                definition: "from left to right."
              },
              {
                element: "rtl",
                definition: "from right to left."
              }
            ]
          }
        ]
      },
      {
        id: 912,
        title: "Blockquote",
        shortDescription: "Defines a portion of citing from another sources.",
        language: "html",
        tag: "<blockquote></blockquote>",
        articleBlocks: []
      },
      {
        id: 913,
        title: "Body",
        shortDescription:
          "Defines the document body. All the text, images, lists, tables etc, will be added here.",
        language: "html",
        tag: "<body></body>",
        articleBlocks: []
      },
      {
        id: 914,
        title: "Break",
        shortDescription: "Defines a single line break.",
        language: "html",
        tag: "<br>",
        articleBlocks: []
      },
      {
        id: 915,
        title: "Button",
        shortDescription: "Defines a button.",
        language: "html",
        tag: "<button>Click me</button>",
        articleBlocks: []
      },
      {
        id: 916,
        title: "Canvas",
        shortDescription:
          "Defines a container for graphics. Combined with a scripting language, drawing elements is possible..",
        language: "html",
        tag: "<canvas>Click me</canvas>",
        articleBlocks: []
      },
      {
        id: 917,
        title: "Caption",
        shortDescription:
          "Defines a table caption. You can only add one caption per table.",
        language: "html",
        tag: "<caption>Click me</caption>",
        articleBlocks: []
      },
      {
        id: 918,
        title: "Cite",
        shortDescription: "Defines a title of a work (song, movie, game etc).",
        language: "html",
        tag: "<cite>Tomb Raider</cite> by Ubisoft",
        articleBlocks: []
      },
      {
        id: 919,
        title: "Code",
        shortDescription:
          "Defines computer code. Just like we do in this table.",
        language: "html",
        tag: "<code></code>",
        articleBlocks: []
      },
      {
        id: 920,
        title: "Col",
        shortDescription: "Defines column properties inside col groups.",
        language: "html",
        tag: "<col span='2'>",
        articleBlocks: []
      },
      {
        id: 921,
        title: "Col Group",
        shortDescription: "Defines column properties inside tables.",
        language: "html",
        tag: "<colgroup></colgroup>",
        articleBlocks: []
      },
      {
        id: 922,
        title: "Data",
        shortDescription:
          "Defines the given content a machine-readable translation.",
        language: "html",
        tag: "<data value='123'>Shirt</data>",
        articleBlocks: []
      },
      {
        id: 923,
        title: "Data List",
        shortDescription:
          "Defines predefined input values used to make autocomplete work on input elements.",
        language: "html",
        tag: "<datalist></datalist>",
        articleBlocks: []
      },
      {
        id: 924,
        title: "Description Data",
        shortDescription: "Defines a data inside a description list.",
        language: "html",
        tag: "<dd></dd>",
        articleBlocks: []
      },
      {
        id: 925,
        title: "Del",
        shortDescription: "Defines text that has been deleted from a document.",
        language: "html",
        tag: "<del></del>",
        articleBlocks: []
      },
      {
        id: 926,
        title: "Details",
        shortDescription:
          "Defines a widget that the user can use to show/hide details.",
        language: "html",
        tag: "<details></details>",
        articleBlocks: []
      },
      {
        id: 927,
        title: "Define",
        shortDescription: "Used to define terms in HTML.",
        language: "html",
        tag: "<dfn></dfn>",
        articleBlocks: []
      },
      {
        id: 928,
        title: "Dialog",
        shortDescription: "Defines a dialog box or window.",
        language: "html",
        tag: "<dialog></dialog>",
        articleBlocks: []
      },
      {
        id: 929,
        title: "Division",
        shortDescription:
          "Defines a division in a HTML document. This is one of the most widely used elements.",
        language: "html",
        tag: "<div></div>",
        articleBlocks: []
      },
      {
        id: 930,
        title: "Description List",
        shortDescription: "Defines a list containing description data.",
        language: "html",
        tag: "<dd></dd>",
        articleBlocks: []
      },
      {
        id: 931,
        title: "Description Term",
        shortDescription: "Defines a term inside a description list.",
        language: "html",
        tag: "<dt></dt>",
        articleBlocks: []
      },
      {
        id: 932,
        title: "Emphasize",
        shortDescription:
          "Defines a phrase tag and renders as emphasized content.",
        language: "html",
        tag: "<em></em>",
        articleBlocks: []
      },
      {
        id: 933,
        title: "Embed",
        shortDescription:
          "Defines a container for interactive content or an external application.",
        language: "html",
        tag: "<embed>",
        articleBlocks: []
      },
      {
        id: 934,
        title: "Fieldset",
        shortDescription: "Defines a set of group related elements in a form.",
        language: "html",
        tag: "<fieldset></fieldset>",
        articleBlocks: []
      },
      {
        id: 935,
        title: "Figure Caption",
        shortDescription: "Defines a caption for a figure.",
        language: "html",
        tag: "<figcaption></figcaption>",
        articleBlocks: []
      },
      {
        id: 936,
        title: "Figure",
        shortDescription:
          "Defines a figure. Usually containing image and caption.",
        language: "html",
        tag: "<figure></figure>",
        articleBlocks: []
      },
      {
        id: 937,
        title: "Font",
        shortDescription: "Defines specific font information for a given text.",
        language: "html",
        tag: "<font></font>",
        articleBlocks: []
      },
      {
        id: 938,
        title: "Footer",
        shortDescription:
          "Defines a footer or lower part used in a document or section.",
        language: "html",
        tag: "<footer></footer>",
        articleBlocks: []
      },
      {
        id: 939,
        title: "Form",
        shortDescription: "Defines an user-input defined container.",
        language: "html",
        tag: "<form></form>",
        articleBlocks: []
      },
      {
        id: 940,
        title: "Heading 1",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text. This is the biggest heading in HTML.",
        language: "html",
        tag: "<h1></h1>",
        articleBlocks: []
      },
      {
        id: 941,
        title: "Heading 2",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text.",
        language: "html",
        tag: "<h2></h2>",
        articleBlocks: []
      },
      {
        id: 942,
        title: "Heading 3",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text.",
        language: "html",
        tag: "<h3></h3>",
        articleBlocks: []
      },
      {
        id: 943,
        title: "Heading 4",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text.",
        language: "html",
        tag: "<h4></h4>",
        articleBlocks: []
      },
      {
        id: 944,
        title: "Heading 5",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text.",
        language: "html",
        tag: "<h5></h5>",
        articleBlocks: []
      },
      {
        id: 945,
        title: "Heading 6",
        shortDescription:
          "Defines a heading size. Lower the number, bigger the text. This is the lowest heading in HTML.",
        language: "html",
        tag: "<h6></h6>",
        articleBlocks: []
      },
      {
        id: 946,
        title: "Head",
        shortDescription: "Defines the heading of a document.",
        language: "html",
        tag: "<head></head>",
        articleBlocks: []
      },
      {
        id: 947,
        title: "Header",
        shortDescription:
          "Defines the heading of a section. It usually contains data about the author or navigation elements.",
        language: "html",
        tag: "<header></header>",
        articleBlocks: []
      },
      {
        id: 948,
        title: "Horizontal Rule",
        shortDescription:
          "Defines a horizontal line that's used to separate content on a page. Usually shown up as a line.",
        language: "html",
        tag: "<hr>",
        articleBlocks: []
      },
      {
        id: 949,
        title: "HTML",
        shortDescription:
          "Defines an element that tells the browser that the document is HTML.",
        language: "html",
        tag: "<html></html>",
        articleBlocks: []
      },
      {
        id: 950,
        title: "Italic",
        shortDescription: "Defines italic text.",
        language: "html",
        tag: "<i></i>",
        articleBlocks: []
      },
      {
        id: 951,
        title: "Inline Frame",
        shortDescription:
          "Defines a container for another document inside the current document.",
        language: "html",
        tag: "<iframe></iframe>",
        articleBlocks: []
      },
      {
        id: 952,
        title: "Image",
        shortDescription: "Defines an image on the screen.",
        language: "html",
        tag: "<img>",
        articleBlocks: []
      },
      {
        id: 953,
        title: "Input",
        shortDescription:
          "Defines an input that the user could check, write into or select options.",
        language: "html",
        tag: "<input>",
        articleBlocks: []
      },
      {
        id: 954,
        title: "Ins",
        shortDescription: "Defines text that has been added into a document.",
        language: "html",
        tag: "<ins>",
        articleBlocks: []
      },
      {
        id: 954,
        title: "Ins",
        shortDescription: "Defines text that has been added into a document.",
        language: "html",
        tag: "<ins>",
        articleBlocks: []
      },
      {
        id: 955,
        title: "Keyboard Input",
        shortDescription: "Defines keyboard input text.",
        language: "html",
        tag: "<kbd></kbd>",
        articleBlocks: []
      },
      {
        id: 956,
        title: "Label",
        shortDescription:
          "Defines a label for elements such as inputs, textareas, select etc.",
        language: "html",
        tag: "<label></labe>",
        articleBlocks: []
      },
      {
        id: 957,
        title: "Legend",
        shortDescription:
          "Defines a caption for a fieldset container. Useful for form input separations.",
        language: "html",
        tag: "<legend></legend>",
        articleBlocks: []
      },
      {
        id: 958,
        title: "List Item",
        shortDescription:
          "Defines a list element inside an ordered or unordered list.",
        language: "html",
        tag: "<li></li>",
        articleBlocks: []
      },
      {
        id: 959,
        title: "Link",
        shortDescription: "Defines a link to an external resource.",
        language: "html",
        tag: "<link>",
        articleBlocks: []
      },
      {
        id: 960,
        title: "Main",
        shortDescription:
          "Defines a container for the main content of a document.",
        language: "html",
        tag: "<main></main>",
        articleBlocks: []
      },
      {
        id: 961,
        title: "Map",
        shortDescription: "Defines an image-map with clickable zones.",
        language: "html",
        tag: "<map></map>",
        articleBlocks: []
      },
      {
        id: 962,
        title: "Mark",
        shortDescription: "Defines a highlighted text.",
        language: "html",
        tag: "<mark></mark>",
        articleBlocks: []
      },
      {
        id: 963,
        title: "Meta",
        shortDescription:
          "Defines metadata for a document. Metadata is information about data.",
        language: "html",
        tag: "<meta>",
        articleBlocks: []
      },
      {
        id: 964,
        title: "Meter",
        shortDescription: "Defines a gauge in the document.",
        language: "html",
        tag: "<meter></meter>",
        articleBlocks: []
      },
      {
        id: 965,
        title: "Nav",
        shortDescription: "Defines a list of navigation links.",
        language: "html",
        tag: "<nav></nav>",
        articleBlocks: []
      },
      {
        id: 966,
        title: "Noscript",
        shortDescription:
          "Defines an alternative to inform users that their browser is not supporting scripting languages.",
        language: "html",
        tag: "<noscript></noscript>",
        articleBlocks: []
      },
      {
        id: 967,
        title: "Object",
        shortDescription:
          "Defines multimedia within a HTML document. Audio, Video, Flash, PDF etc",
        language: "html",
        tag: "<object></object>",
        articleBlocks: []
      },
      {
        id: 968,
        title: "Ordered List",
        shortDescription:
          "Defines an ordered list that shows numeric or alphabetic notation for each list item.",
        language: "html",
        tag: "<ol></ol>",
        articleBlocks: []
      },
      {
        id: 969,
        title: "Option Group",
        shortDescription:
          "Defines a group of elements that are related. Used in select inputs.",
        language: "html",
        tag: "<optgroup></optgroup>",
        articleBlocks: []
      },
      {
        id: 970,
        title: "Option",
        shortDescription: "Defines an option in a select list.",
        language: "html",
        tag: "<option></option>",
        articleBlocks: []
      },
      {
        id: 971,
        title: "Output",
        shortDescription: "Defines an output of a calculation.",
        language: "html",
        tag: "<output></output>",
        articleBlocks: []
      },
      {
        id: 972,
        title: "Paragraph",
        shortDescription:
          "Defines an portion of a text that should render as a paragraph.",
        language: "html",
        tag: "<p></p>",
        articleBlocks: []
      },
      {
        id: 973,
        title: "Param",
        shortDescription:
          "Defines a way of adding parameters for plugins embedded as objects.",
        language: "html",
        tag: "<param></param>",
        articleBlocks: []
      },
      {
        id: 974,
        title: "Picture",
        shortDescription:
          "Defines a way for developers to specify more complex ways of showing images.",
        language: "html",
        tag: "<picture></picture>",
        articleBlocks: []
      },
      {
        id: 975,
        title: "Preformatted",
        shortDescription: "Defines a piece of text that's preformatted.",
        language: "html",
        tag: "<pre></pre>",
        articleBlocks: []
      },
      {
        id: 976,
        title: "Progress",
        shortDescription: "Defines a progress bar that's easily customizable.",
        language: "html",
        tag: "<progress></progress>",
        articleBlocks: []
      },
      {
        id: 977,
        title: "Quotation",
        shortDescription: "Define a short quotation of the screen.",
        language: "html",
        tag: "<q></q>",
        articleBlocks: []
      },
      {
        id: 978,
        title: "Ruby Parentheses",
        shortDescription:
          "Define parentheses around a ruby text inside a browser that doesn't support ruby annotations.",
        language: "html",
        tag: "<rp></rp>",
        articleBlocks: []
      },
      {
        id: 979,
        title: "Ruby Tag",
        shortDescription:
          "Define an explanation of pronounciation of characters in a ruby annotation.",
        language: "html",
        tag: "<rt></rt>",
        articleBlocks: []
      },
      {
        id: 980,
        title: "Ruby",
        shortDescription: "Defines a ruby annotation.",
        language: "html",
        tag: "<ruby></ruby>",
        articleBlocks: []
      },
      {
        id: 981,
        title: "Incorrect Text",
        shortDescription:
          "Defines a text that's no longer available, correct or relevant.",
        language: "html",
        tag: "<s></s>",
        articleBlocks: []
      },
      {
        id: 982,
        title: "Sample Output",
        shortDescription: "Defines a computer program text output.",
        language: "html",
        tag: "<samp></samp>",
        articleBlocks: []
      },
      {
        id: 983,
        title: "Script",
        shortDescription: "Defines a client side script.",
        language: "html",
        tag: "<script></script>",
        articleBlocks: []
      },
      {
        id: 984,
        title: "Section",
        shortDescription: "Defines a section within a HTML document.",
        language: "html",
        tag: "<section></section>",
        articleBlocks: []
      },
      {
        id: 985,
        title: "Select",
        shortDescription: "Defines a dropdown list with options.",
        language: "html",
        tag: "<select></select>",
        articleBlocks: []
      },
      {
        id: 986,
        title: "Small",
        shortDescription: "Defines a smaller text.",
        language: "html",
        tag: "<small></small>",
        articleBlocks: []
      },
      {
        id: 987,
        title: "Source",
        shortDescription:
          "Defines multiple media resources for media elements.",
        language: "html",
        tag: "<source></source>",
        articleBlocks: []
      },
      {
        id: 988,
        title: "Span",
        shortDescription: "Defines group of inline-elements in a document.",
        language: "html",
        tag: "<span></span>",
        articleBlocks: []
      },
      {
        id: 989,
        title: "Strong",
        shortDescription: "Defines an important text. Heavy and bolded.",
        language: "html",
        tag: "<strong></strong>",
        articleBlocks: []
      },
      {
        id: 990,
        title: "Style",
        shortDescription: "Defines style information inside the document.",
        language: "html",
        tag: "<style></style>",
        articleBlocks: []
      },
      {
        id: 991,
        title: "Subscript",
        shortDescription:
          "Defines a text that appears half a character below the normal line.",
        language: "html",
        tag: "<sub></sub>",
        articleBlocks: []
      },
      {
        id: 992,
        title: "Summary",
        shortDescription:
          "Defines a clickable heading for the details element, in order to show/hide the details.",
        language: "html",
        tag: "<summary></summary>",
        articleBlocks: []
      },
      {
        id: 993,
        title: "Superscript",
        shortDescription:
          "Defines a text that appears half a character above the normal line.",
        language: "html",
        tag: "<sup></sup>",
        articleBlocks: []
      },
      {
        id: 994,
        title: "SVG",
        shortDescription: "Defines a container for SVG graphics.",
        language: "html",
        tag: "<svg></svg>",
        articleBlocks: []
      },
      {
        id: 995,
        title: "Table",
        shortDescription: "Defines an HTML table.",
        language: "html",
        tag: "<table></table>",
        articleBlocks: []
      },
      {
        id: 996,
        title: "Table Body",
        shortDescription: "Defines an HTML table's body.",
        language: "html",
        tag: "<tbody></tbody>",
        articleBlocks: []
      },
      {
        id: 997,
        title: "Table Data",
        shortDescription: "Defines a piece of data inside the table row.",
        language: "html",
        tag: "<td></td>",
        articleBlocks: []
      },
      {
        id: 998,
        title: "Template",
        shortDescription: "Defines content that's hidden from the client.",
        language: "html",
        tag: "<template></template>",
        articleBlocks: []
      },
      {
        id: 999,
        title: "Textarea",
        shortDescription: "Defines another input method, this time multi-line.",
        language: "html",
        tag: "<textarea></textarea>",
        articleBlocks: []
      },
      {
        id: 1000,
        title: "Table Footer",
        shortDescription: "Defines the lower part of a table",
        language: "html",
        tag: "<tfoot></tfoot>",
        articleBlocks: []
      },
      {
        id: 1001,
        title: "Table Header Cell",
        shortDescription: "Defines a header cell in an HTML table.",
        language: "html",
        tag: "<th></th>",
        articleBlocks: []
      },
      {
        id: 1002,
        title: "Table Header",
        shortDescription:
          "Defines the upper side of an HTML table. Usually contains column headers.",
        language: "html",
        tag: "<thead></thead>",
        articleBlocks: []
      },
      {
        id: 1003,
        title: "Time",
        shortDescription: "Defines human-readable date or time.",
        language: "html",
        tag: "<time></time>",
        articleBlocks: []
      },
      {
        id: 1004,
        title: "Title",
        shortDescription: "Defines the HTML document's title.",
        language: "html",
        tag: "<title></title>",
        articleBlocks: []
      },
      {
        id: 1005,
        title: "Table Row",
        shortDescription: "Defines a row in an HTML table.",
        language: "html",
        tag: "<tr></tr>",
        articleBlocks: []
      },
      {
        id: 1006,
        title: "Track",
        shortDescription:
          "Defines any text items for media such as subtitles, captions or any other information that should be visible while playing.",
        language: "html",
        tag: "<track></track>",
        articleBlocks: []
      },
      {
        id: 1007,
        title: "Underline",
        shortDescription: "Defines text that should be underlined.",
        language: "html",
        tag: "<u></u>",
        articleBlocks: []
      },
      {
        id: 1008,
        title: "Unordered List",
        shortDescription:
          "Defines a list that's list items contain bullets as anchors.",
        language: "html",
        tag: "<ul></ul>",
        articleBlocks: []
      },
      {
        id: 1009,
        title: "Variable",
        shortDescription: "Defines a variable in an HTML document.",
        language: "html",
        tag: "<var></var>",
        articleBlocks: []
      },
      {
        id: 1010,
        title: "Video",
        shortDescription:
          "Defines any type of video content such as streams or clips.",
        language: "html",
        tag: "<video></video>",
        articleBlocks: []
      },
      {
        id: 1011,
        title: "Word Breaks",
        shortDescription:
          "Defines a portion of text that should be placed under a new line on resize.",
        language: "html",
        tag: "<wbr></wbr>",
        articleBlocks: []
      }
    ]
  }
];
