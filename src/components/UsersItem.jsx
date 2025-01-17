import React from "react";
import { useParams } from "react-router-dom";

const UsersItem = ( {data} ) => {
    const { id } = useParams();
    const user = data[id-1];
    // console.log(id, data[id-1],Object.keys(user));
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {Object.keys(user).map((id) => (
            <li key={id}>
                <b>{id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}: </b>
                {user[id]}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersItem;
