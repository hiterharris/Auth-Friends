import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function FriendsList() {
  return (
      <div className="FriendsList">
        <h1>Friends List</h1>
        <Link to='/api/friends/:id'>Friend #1</Link>
      </div>
  );
}

export default FriendsList;
