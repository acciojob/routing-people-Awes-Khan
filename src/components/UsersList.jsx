import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({data}) => {
  // console.log(data);
  return (
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link to={`/users/${index + 1}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default UsersList;
