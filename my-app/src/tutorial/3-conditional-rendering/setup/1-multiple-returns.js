import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('defalut user');
  const catchUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    const { login } = user;
    setUser(login)
  }
  useEffect(() => {
    catchUsers()
    setLoading(false)
    console.log(user)
  }, [])
  // useEffect(() => {
  //   fetch(url).then((resp) => resp.json).then((user) => {
  //     const { login } = user;
  //     setUser(login)
  //     setLoading(false)
  //     console.log(login)
  //   })
    // async ()=>{
    //   const response = await fatch(url);
    //   const users = await response.json();
    //   const {login} = users;
    //   setUser(login)
    //   console.log(login)
    // }
  // = 
  if (loading) {
    return <>
      <h2>Loading...</h2>
    </>;
  }
  if (error) {
    return <>
      <h2>Error...</h2>
    </>;
  }
  return <>
    <h2>{user}</h2>
  </>;
};

export default MultipleReturns;
