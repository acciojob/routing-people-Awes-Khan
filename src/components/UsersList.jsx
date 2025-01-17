import React from "react";

const UsersList = (data) => {
  console.log(data);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.data.map((user, index) => (
          <li key={index+1}><a href={`/users/${index+1}`}>{user.name}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
