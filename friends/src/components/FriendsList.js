import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import FriendsForm from './FriendsForm';

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(response => {
        setFriendsList(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="FriendsList">
      <FriendsForm setFriendsList={setFriendsList} />
      <div className='wrapper'>
        {friendsList.map((friend, i) => {
          return (
          <Link to={`/api/friends/${friend.id}`} key={i} className='friend-container'>
              <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                <div className='friend-buttons'>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FriendsList;
