import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="tooltip"></div>
          <div id="overlay"></div>
          <div id="modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
