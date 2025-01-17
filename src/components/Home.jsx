import React from "react";
import UsersList from "./UsersList";

const Home = ({data}) => {
  return (
    <>
    <h1>User List</h1>
    <UsersList data={data} />
    </>
  )
}

export default Home;