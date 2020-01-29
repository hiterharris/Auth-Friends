import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [newFriend, setNewFriend] = useState({
      id: Date.now(),
      name: '',
      age: '',
      email: ''
  });

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

  const handleChanges = e => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
    [e.target.name]: e.target.value
    });
  }

  const handlePostRequest = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/friends/', newFriend)
    .then(response => {
      setFriendsList({
        ...response.data,
      })
    })
    .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFriendsList([
      ...friendsList,
      newFriend
    ]);
  }

  console.log(friendsList);

  return (
    <div className="FriendsList">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleChanges}
        />
        <input
          type='text'
          placeholder='Age'
          name='age'
          onChange={handleChanges}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChanges}
        />
        <button>Add Friend</button>
      </form>
      <div className='wrapper'>
        {friendsList.map(friend => {
          return (
          <Link to={`/api/friends/${friend.id}`} key={friend.id} className='friend-container'>
              <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FriendsList;
