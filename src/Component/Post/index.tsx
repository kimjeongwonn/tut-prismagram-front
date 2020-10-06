import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
  ${({ theme }) => theme.whiteBox}
`;

const Post: React.FC<{ data: NexusGenFieldTypes['Post'] }> = ({ data }) => {
  return (
    <PostWrapper>
      {data.files.map((img) => (
        <img src={img.url} />
      ))}
      <p>{data.caption}</p>
    </PostWrapper>
  );
};

export default Post;
