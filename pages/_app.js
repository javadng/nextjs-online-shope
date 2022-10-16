import { Provider } from "react-redux";
import Main from "../components/Layouts/Main";
import "../styles/globals.scss";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Provider>
  );
}

export default MyApp;
