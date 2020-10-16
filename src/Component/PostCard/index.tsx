import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CommentIcon, HeartFull } from '../Icons';

const PostCardWrapper = styled.div<{ img: string }>`
  margin: 5px;
  width: 200px;
  height: 200px;
  background-image: url(${({ img }) => img});
  & div {
    visibility: hidden;
  }
  &:hover {
    & div {
      visibility: visible;
    }
  }
`;

const PostCardOveray = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Icon = styled.div`
  margin: 0 5px;
  color: white;
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostCard: React.FC<{ data: NexusGenFieldTypes['Post'] }> = ({ data }) => {
  return (
    <PostCardWrapper img={data?.files[0]?.url}>
      <Link to={`/profile/${data?.user?.username}`}>
        <PostCardOveray>
          <Icon>
            <HeartFull fill="white" />
            <span style={{ marginLeft: '5px' }}>{data.likesCount}</span>
          </Icon>
          <Icon>
            <CommentIcon />
            <span style={{ marginLeft: '5px' }}>{data.commentsCount}</span>
          </Icon>
        </PostCardOveray>
      </Link>
    </PostCardWrapper>
  );
};

export default PostCard;
