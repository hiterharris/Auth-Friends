import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const FriendsList = () => {
  return (
      <div className="FriendsList">
        {/* <Link to='/api/friends/:id'>Friend #1</Link> */}
        <Link to='/api/friends-card'>Friend #1</Link>
      </div>
  );
}

export default FriendsList;
