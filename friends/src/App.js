import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendsCard from './components/FriendsCard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Router >
      <div className="App">
        <nav>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/api/login">Login</Link>
          <Link className='nav-link' to='/api/friends'>Friends List</Link>
        </nav>
        <h1>Friends</h1>
      </div>
      <Switch>
        <Route exact path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={FriendsList} />
        <Route path='/api/friends/:id' component={FriendsCard} />
        <Route path='/api/friends/:id' render={props => <FriendsCard {...props} />} />

      </Switch>
    </Router>
  );
}

export default App;
