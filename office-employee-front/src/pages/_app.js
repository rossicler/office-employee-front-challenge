import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import theme from "../ui/themes/theme";
import employeesReducer from "../store/employee-reducers";
import Header from "../ui/components/Header/Header";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
