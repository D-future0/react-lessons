import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';

const UseStateObject = () => {
  const [user, setUser] = useState({
    name: `ugochukwu`,
    age: 25,
    slogan: `i love python`
  })
  const clickHandler = () => {
    return setUser({...user, slogan: `i love React`})
  }
  return <>
  <h3>{user.name}</h3>
  <h3>{user.age}</h3>
  <h3>{user.slogan}</h3>
  <button type='button' className="btn" onClick={clickHandler}>change slogan</button>
  </>;
};

export default UseStateObject;
