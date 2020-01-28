import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendsCard from './components/FriendsCard';
import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <nav>
          <Link className='nav-link' to="/api/login">Login</Link>
          <Link className='nav-link' to='/api/friends'>Friends List</Link>
        </nav>
        <h1>Friends</h1>
      </div>
      <Switch>
        <Route path='/api/login' component={Login} />
        <Route exact path='/api/friends' component={FriendsList} />
        <Route exact path='/api/friends/:id' component={FriendsCard} />
      </Switch>
    </Router>
  );
}

export default App;
