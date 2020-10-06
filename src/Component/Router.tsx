import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feed from './Routes/Feed';
import Auth from './Routes/Auth';
import Explore from './Routes/Explore';
import Profile from './Routes/Profile';
import Search from './Routes/Search';

const LoggedInRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Feed}></Route>
    <Route path="/search" component={Search}></Route>
    <Route path="/explore" component={Explore}></Route>
    <Route path="/profile/:username" component={Profile}></Route>
  </Switch>
);
const LoggedOutRoutes: React.FC = () => (
  <>
    <Route path="/" component={Auth}></Route>
  </>
);

interface RouterProps {
  isLoggedIn: boolean;
}

const Router: React.FC<RouterProps> = ({ isLoggedIn }) => (isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />);

export default Router;
