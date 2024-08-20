import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState(`hola`)
  const clickHandler = ()=>{
    if(text===`hola`){
      setText(`adios`)
    }
    else{
      setText(`hola`)
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className="btn"  onClick={clickHandler}>change title</button>
  </React.Fragment>
};

export default UseStateBasics;
