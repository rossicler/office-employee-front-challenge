import { gql } from "@apollo/client";

export const ADD_EMPLOYEE = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $birthDate: String!
    $gender: String!
    $username: String!
    $password: String!
    $email: String!
    $phone: String!
    $address: String!
    $country: String!
    $employeeId: String!
    $designation: String!
    $department: String!
    $workingHours: Int!
    $bankName: String!
    $holderName: String!
    $expiryDate: String!
    $paymentType: String!
    $cardNumber: String!
    $cvc: String!
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      birthDate: $birthDate
      gender: $gender
      username: $username
      password: $password
      email: $email
      phone: $phone
      address: $address
      country: $country
      employeeId: $employeeId
      designation: $designation
      department: $department
      workingHours: $workingHours
      bankName: $bankName
      holderName: $holderName
      expiryDate: $expiryDate
      paymentType: $paymentType
      cardNumber: $cardNumber
      cvc: $cvc
    ) {
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

export const GET_EMPLOYEE = gql`
  query GetEmployee($token: String!) {
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
