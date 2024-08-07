import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`http://${user.website}`} >{user.website}</a></p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p>Company: {user.company.name} , {user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
