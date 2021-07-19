import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  {
    employees {
      firstName
      lastName
      email
    }
  }
`;
