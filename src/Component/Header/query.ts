import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query SearchUsers($keyword: String!) {
    searchUsers(keyword: $keyword) {
      id
      profileImage
      fullName
      username
    }
  }
`;

export const ME = gql`
  query MyProfile {
    seeMy {
      id
      profileImage
      fullName
      username
    }
  }
`;
