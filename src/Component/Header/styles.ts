import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 15px 0;
  margin-bottom: 60px;
  border-bottom: ${({ theme }) => theme.boxBorder};
`;
export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const HeaderColumn = styled.div`
  width: 100%;
  text-align: center;
  &:last-child {
    margin-right: 20px;
    margin-left: auto;
    text-align: right;
  }
  &:first-child {
    margin-left: 20px;
    margin-right: auto;
    text-align: left;
  }
`;

export const SearchBar = styled.input`
  height: 30px;
  width: 100%;
  min-width: 200px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgColor};
  padding: 5px;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
