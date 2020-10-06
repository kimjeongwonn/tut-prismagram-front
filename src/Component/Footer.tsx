import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  margin-top: 50px;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
const Link = styled.a`
  color: ${({ theme }) => theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${({ theme }) => theme.darkGreyColor};
`;

export default () => {
  return (
    <Footer>
      <List>
        <ListItem>
          <Link href="#">about us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">support</Link>
        </ListItem>
        <ListItem>
          <Link href="#">press</Link>
        </ListItem>
        <ListItem>
          <Link href="#">api</Link>
        </ListItem>
        <ListItem>
          <Link href="#">jobs</Link>
        </ListItem>
        <ListItem>
          <Link href="#">priacy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">terms</Link>
        </ListItem>
        <ListItem>
          <Link href="#">directory</Link>
        </ListItem>
        <ListItem>
          <Link href="#">profiles</Link>
        </ListItem>
        <ListItem>
          <Link href="#">hashtags</Link>
        </ListItem>
        <ListItem>
          <Link href="#">language</Link>
        </ListItem>
      </List>
      <Copyright>{new Date().getFullYear()} &copy;</Copyright>
    </Footer>
  );
};
