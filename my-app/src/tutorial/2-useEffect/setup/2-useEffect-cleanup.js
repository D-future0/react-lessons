import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const resize = ()=>{
    setWidth(window.innerWidth)
  }
useEffect(()=>{
  window.addEventListener(`resize`, resize)
  return (()=>{
    window.removeEventListener(`resize`, resize)
})
})
return<>
<h2>window size</h2>
<h2>{width}</h2>
</>
};

export default UseEffectCleanup;
