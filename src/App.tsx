import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Theme from './Styles/Theme';
import Router from './Component/Router';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Component/Footer';
import Header from './Component/Header';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
`;

function App() {
  const isLoggedIn = useQuery<{ isLoggedIn: boolean }>(IS_LOGGED_IN).data?.isLoggedIn ?? false;

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HashRouter>
        <Header />
        <Wrapper>
          <Router isLoggedIn={isLoggedIn} />
          <Footer />
        </Wrapper>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
