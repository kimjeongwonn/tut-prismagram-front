import { gql } from '@apollo/client';

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($postId: Int!) {
    toggleLike(postId: $postId)
  }
`;
