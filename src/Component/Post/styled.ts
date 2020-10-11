import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 40px;
  }
  ${({ theme }) => theme.whiteBox}
`;

export const AuthorContainer = styled.div`
  height: 60px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const AuthorName = styled.span`
  font-weight: 800;
  font-size: 14px;
  padding-right: 5px;
`;

export const LikeCounter = styled.div`
  font-weight: 800;
  font-size: 14px;
  padding-bottom: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const PostButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 15px 15px 15px;
`;

export const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.blackColor};
`;

export const TimeStamp = styled.div`
  color: ${({ theme }) => theme.darkGreyColor};
  font-size: 12px;
  margin-top: 10px;
`;

export const CommentContainer = styled.ul`
  list-style-type: none;
`;

export const CommentCount = styled.div`
  color: ${({ theme }) => theme.darkGreyColor};
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const Comment = styled.li`
  margin-top: 8px;
`;

export const CommentInputContainer = styled.input`
  border: 0;
  border-top: ${({ theme }) => theme.boxBorder};
  background: none;
  width: 100%;
  border-radius: 0;
  padding: 30px 15px;
  font-size: 14px;
`;
