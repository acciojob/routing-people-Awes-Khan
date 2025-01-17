import React from "react";
import { Link } from "react-router-dom";

const UsersList = (data) => {
  console.log(data);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.data.map((user, index) => (
          <li key={index+1} ><a><Link to={`/users/${index+1}`}>{user.name}</Link></a></li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
