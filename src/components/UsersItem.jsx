import React from "react";
import { useParams } from "react-router-dom";

const UsersItem = ( {data} ) => {
    const { id } = useParams();
    const user = data[id-1];
    // console.log(id, data[id-1],Object.keys(user));
  return (
    <div>
      <h1>User Details</h1>
      {Object.keys(user).map((id) => (
      <p key={id}>
        {id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}:{user[id]}
      </p>
      ))}
    </div>
  );
};

export default UsersItem;
