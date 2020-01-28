import React from 'react';

const FriendsCard = props => {
  console.log(props);
  return (
      <div className="FriendsCard">
        <h1>Friends Card</h1>
      </div>
  );
}

export default FriendsCard;

// {friendsList.map(friend => {
//   return (
//     <div key={friend.id}>
//       <p>{friend.name}</p>
//       <p>{friend.age}</p>
//       <p>{friend.email}</p>
//     </div>
//   );
// })}