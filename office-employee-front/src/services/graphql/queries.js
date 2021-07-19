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

export const GET_EMPLOYEE = gql`
  query GeEmployee($token: String!) {
    employee(token: $token) {
      id
      firstName
      lastName
      birthDate
      gender
      username
      email
      phone
      address
      country
      employeeId
      designation
      department
      workingHours
      bankInfo {
        bankName
        holderName
        expiryDate
        paymentType
        cardNumber
        cvc
      }
    }
  }
`;

export const LOGIN_EMPLOYEE = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      employee {
        id
      }
    }
  }
`;
