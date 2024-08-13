import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const catchUsers = async ()=>{
    const response = await fetch(url);
    const result = await response.json();
    setUsers(result)
    console.log(result)
  }
  useEffect(()=>{
    catchUsers()
  }, [])
  return <>
    
    <h2>fetch data</h2>
        <ul className='users'>
          {users.map((user)=>{
      const { id, login, avatar_url, html_url } = user;
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
          <a href={html_url}>profile</a>
          </div>
        </li>
      )
      
    })}
    </ul>
  </>
};

export default UseEffectFetchData;
