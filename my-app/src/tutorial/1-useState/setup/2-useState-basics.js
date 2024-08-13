import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [text, setText] = useState('welcome')
  const clickHandle = () => {
      if (text === 'welcome') {
        setText('good bye')
      }
      else{setText('welcome')}
    
  } 
  return <React.Fragment>
    <h2>{text}</h2>
    <button type='button' className='btn' onClick={clickHandle}>change tittle</button>
  </React.Fragment>
};

export default UseStateBasics;
