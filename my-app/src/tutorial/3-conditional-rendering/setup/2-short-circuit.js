import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(true)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hola world';
  const clickHandler = () => {
    return setText(!text)
  }

  return <>
  {/* <h2>{firstValue}</h2>
  <h2>value:{secondValue}</h2> */}
  
  {/* <h1>{text || <h1>null 2</h1>}</h1> */}
  <button type='button' className='btn' onClick={clickHandler}>toggle button</button>
  {/* <h1>{text && <h1>null 2</h1>}</h1> */}
  <h3>{text? (<p>text is true</p>) : <p>text is not true</p>}</h3>
  </>

};

export default ShortCircuit;
