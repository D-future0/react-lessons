import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setUser] = useState({
    name:`collins`,
    age: 55,
    message: `random message`
  })
  const { name, age, message } = person
  const clickHandler = ()=>{
    setUser({...person, message:`i love React`})
  }
  return (<>
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{message}</h2>
    <button className='btn' onClick={clickHandler}>change message</button>
  </>)
};

export default UseStateObject;
