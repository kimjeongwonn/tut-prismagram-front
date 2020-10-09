import React from 'react';
import { SEE_FEED } from './query';
import Post from '../../Post';
import Loader from '../../Loader';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const MyProfile = styled.div`
  width: 300px;
`;

export default () => {
  const { data: feedData, loading: feedLoading } = useQuery<{ seeFeed: NexusGenFieldTypes['Post'][] }>(SEE_FEED);
  const feeds = feedData?.seeFeed;

  return (
    <FeedWrapper>
      {feedLoading ? (
        <Loader />
      ) : (
        <PostWrapper>
          {feeds?.map((feed) => (
            <Post data={feed} />
          ))}
        </PostWrapper>
      )}

      <MyProfile></MyProfile>
    </FeedWrapper>
  );
};
