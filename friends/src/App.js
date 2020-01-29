import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendsCard from './components/FriendsCard';
import PrivateRoute from './components/PrivateRoute';
import header from './images/header.png';
import './App.css';

const App = () => {
  return (
    <Router >
      <div className="App">
        <div className='empty-container'></div>
        <img className='header' src={header} />
        <nav>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/api/login">Login</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={FriendsList} />
        <Route path='/api/friends/:id' component={FriendsCard} />
      </Switch>
    </Router>
  );
}

export default App;
