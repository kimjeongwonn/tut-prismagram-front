import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query SearchUsers($keyword: String!) {
    searchUsers(keyword: $keyword) {
      id
      profileImage
      username
      fullName
      isFollowing
      isSelf
    }
    searchPost(keyword: $keyword) {
      id
      likesCount
      commentsCount
    }
  }
`;
