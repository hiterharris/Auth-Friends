import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsCard = () => {
  const [friend, setFriend] = useState([]);
  let {id} = useParams();
  console.log({id});

  useEffect(() => {
    axiosWithAuth()
    .get(`/api/friends/${id}`)
    .then(response => {
      setFriend(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [id]);

  return (
      <div className="FriendsCard">
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </div>
  );
}

export default FriendsCard;
