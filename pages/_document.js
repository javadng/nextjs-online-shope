import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="tooltip"></div>
          <div id="overlay-root"></div>
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
