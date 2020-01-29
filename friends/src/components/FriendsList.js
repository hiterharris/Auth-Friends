import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

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
        {friendsList.map(friend => {
          return (
          <Link to={`/api/friends/${friend.id}`} key={friend.id} className='friend-container'>
              <div >
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
  );
}

export default FriendsList;
