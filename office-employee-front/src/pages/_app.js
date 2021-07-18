import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import theme from "../ui/themes/theme";
import employeesReducer from "../store/employee-reducers";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sign Up Form</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
