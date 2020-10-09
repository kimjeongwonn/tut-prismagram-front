import { gql } from '@apollo/client';

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($postId: Int!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($postId: Int!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      user {
        id
        profileImage
        username
      }
      text
    }
  }
`;
