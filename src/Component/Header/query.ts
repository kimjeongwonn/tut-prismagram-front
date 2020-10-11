import { gql } from '@apollo/client';

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
