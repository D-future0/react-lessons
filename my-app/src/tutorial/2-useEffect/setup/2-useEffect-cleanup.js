import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(0);
  const checksize = () => {
    setValue(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener(`resize`, checksize);
    // return window.removeEventListener(`resize`, checksize) 
  }, [] )
  return <>
  <h2>the window width is {value}px</h2>
  </>;
};

export default UseEffectCleanup;
