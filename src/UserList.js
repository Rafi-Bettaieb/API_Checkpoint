import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUser(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-list">
      {listOfUser.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
