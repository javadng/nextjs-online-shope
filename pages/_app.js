import { Provider } from "react-redux";
import Main from "../components/Layouts/Main";
import "../styles/globals.scss";
import store from "../store/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="You can buy your shoes from us. javad online shope"
        />
        <link rel="icon" type="image/x-icon" href="/store-icon.png" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Provider>
  );
}

export default MyApp;
