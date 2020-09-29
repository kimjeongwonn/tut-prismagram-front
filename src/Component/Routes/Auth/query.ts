import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const SIGN_UP = gql`
  mutation createAccount($email: String!, $firstName: String!, $lastName: String!, $username: String!) {
    createAccount(email: $email, firstName: $firstName, lastName: $lastName, username: $username)
  }
`;

export const CHECK_USER = gql`
  query checkUser($email: String, $username: String) {
    checkUser(email: $email, username: $username)
  }
`;
