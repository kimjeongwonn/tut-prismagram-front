import { gql } from '@apollo/client';

export const FOLLOW_TOGGLE = gql`
  mutation FollowToggle($followId: String!) {
    followToggle(followId: $followId)
  }
`;
