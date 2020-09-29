import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Theme from './Styles/Theme';
import Router from './Component/Router';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Component/Footer';
const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

function App() {
  const { isLoggedIn } = useQuery(IS_LOGGED_IN).data;

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
