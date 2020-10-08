import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import useInput from '../../Hooks/useInput';
import ProfileImage from '../ProfileImage';
import { HeartEmpty, HeartFull } from '../Icons';
import { TOGGLE_LIKE } from './query';

const PostWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
  ${({ theme }) => theme.whiteBox}
`;

const AuthorContainer = styled.div`
  height: 60px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`;

const LikeButton = styled.button`
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const Post: React.FC<{ data?: NexusGenFieldTypes['Post'] }> = ({ data }) => {
  const [isLike, setIsLike] = useState<boolean | undefined>(data?.isLike);
  const [toggleLike, { data: likeState }] = useMutation<{ toggleLike: boolean }>(TOGGLE_LIKE, {
    update(cache, { data }) {
      setIsLike(data?.toggleLike);
    },
    variables: {
      postId: data?.id,
    },
  });

  const toggleLikeEvent = (e: any) => {
    e.preventDefault();
    toggleLike();
  };

  return (
    <PostWrapper>
      <AuthorContainer>
        <ProfileImage img={data?.user?.profileImage ?? null} size={32} />
        {data?.user?.username}
      </AuthorContainer>
      {data?.files.map((img) => (
        <img src={img.url} alt={undefined} style={{ width: '100%' }} />
      ))}
      <IconContainer>
        <LikeButton onClick={toggleLikeEvent}>
          {isLike && <HeartFull />}
          {!isLike && <HeartEmpty />}
        </LikeButton>
      </IconContainer>
      <p>{data?.caption}</p>
    </PostWrapper>
  );
};

export default Post;
