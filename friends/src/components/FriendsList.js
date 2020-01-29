import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, useParams} from 'react-router-dom';
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

  let {id} = useParams();
  const deleteFriend = () => {
    axiosWithAuth()
      .delete(`/api/friends/:id`, {id})
      .then(response => {
        setFriendsList([...response.data]);
      })
  }

  console.log(friendsList);


  return (
    <div className="FriendsList">
      <FriendsForm setFriendsList={setFriendsList} />
      <div className='wrapper'>
        {friendsList.map((friend, i) => {
          return (
              <div className='friend-container'>
                <Link to={`/api/friends/${friend.id}`} key={i} >
                      <p>{friend.name}</p>
                      <p>{friend.age}</p>
                      <p>{friend.email}</p>
                </Link>
                <div className='friend-buttons'>
                  <button>Edit</button>
                  <button onClick={deleteFriend}>Delete</button>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default FriendsList;
