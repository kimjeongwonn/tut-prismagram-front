import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Feed from './Routes/Feed';
import Auth from './Routes/Auth';

const LoggedInRoutes: React.FC = () => (
  <>
    <Route exact path="/" component={Feed}></Route>
  </>
);
const LoggedOutRoutes: React.FC = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

interface RouterProps {
  isLoggedIn: boolean;
}

const Router: React.FC<RouterProps> = ({ isLoggedIn }) => (
  <HashRouter>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </HashRouter>
);

export default Router;
