import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsForm = props => {
  const [newFriend, setNewFriend] = useState({
      id: Date.now(),
      name: '',
      age: '',
      email: ''
  });

  const handleChanges = e => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
    [e.target.name]: e.target.value
    });
  }

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/friends/', newFriend)
    .then(response => {
      props.setFriendsList([
        ...response.data,
      ]);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="FriendsList">
      <form onSubmit={addFriend}>
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
    </div>
  );
}

export default FriendsForm;
