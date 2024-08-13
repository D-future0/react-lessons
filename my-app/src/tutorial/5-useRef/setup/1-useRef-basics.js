import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.current.focus()
  },[])
  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(refContainer.current.value)
  }
  return <>
    <form className='form' onSubmit={onSubmitHandler}>
      <input type='text' ref={refContainer}></input>
      <button type='submit'>submit</button>
    </form>
  </>;
};

export default UseRefBasics;
