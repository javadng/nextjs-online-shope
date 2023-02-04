import { Provider } from "react-redux";
import Main from "../components/Layouts/Main";
import "../styles/globals.scss";
import store from "../store/index";
import Head from "next/head";
import LoadingSpinner from "../components/UI/spinners/LoadingSpinner";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  const contentPage = (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
    </ApolloProvider>
  );

  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <Fragment>{loading ? <LoadingSpinner /> : contentPage}</Fragment>;
}

export default MyApp;
