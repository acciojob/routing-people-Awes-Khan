import React from "react";
import { Link } from "react-router-dom";

const UsersList = (data) => {
  console.log(data);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.data.map((user, index) => (
          <Link key={index + 1} to={`/users/${index+1}`}>
            <li ><a href={`/users/${index + 1}`}>{user.name}</a></li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
