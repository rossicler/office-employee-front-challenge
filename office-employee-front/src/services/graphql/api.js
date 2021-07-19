import { ApolloClient, InMemoryCache } from "@apollo/client";

import { LOGIN_EMPLOYEE, GET_EMPLOYEE, ADD_EMPLOYEE } from "./queries";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

export const loginGraphQL = async (username, password) => {
  return client.mutate({
    mutation: LOGIN_EMPLOYEE,
    variables: { username, password },
  });
};

export const getEmployeeGraphQL = async (token) => {
  return client.query({
    query: GET_EMPLOYEE,
    variables: { token },
  });
};

export const addEmployeeGraphQL = async (employee) => {
  return client.mutate({
    mutation: ADD_EMPLOYEE,
    variables: employee,
  });
};
