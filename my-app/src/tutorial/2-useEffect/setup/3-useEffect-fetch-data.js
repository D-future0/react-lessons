import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    console.log(usersData);
    setUsers(usersData);
  };
  useEffect(() => {
    fetchUsers(users);
  }, []);
  return (
    <>
      <h2>GitHub users</h2>
      <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url } = user
        console.log(user);
        return <><li key={id}>
          <img src={avatar_url}></img>
          <h3>{login}</h3>
          </li></>
      })}
      </ul>
      
    </>
  );
};

export default UseEffectFetchData;
