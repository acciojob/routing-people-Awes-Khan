import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UsersItem = ( {data} ) => {
  const { id } = useParams();
  const user = data[id - 1];
  const [loadingstate, setLoadingstate] = React.useState(true);
  
  // console.log(id, data[id-1],Object.keys(user));
  useEffect(() => {
    setTimeout(() => {
      setLoadingstate(false);
    }, 1000);
  }, []);
  return (
    loadingstate ? <p>Loading...</p> :
      <div>
        <h1>User Details</h1>
        <ul>
          {Object.keys(user).map((id) => (
            <li key={id}>
              <p>
                <b>{id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}:</b> {user[id]}
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default UsersItem;
