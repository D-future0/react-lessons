import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(refContainer.current.value)
  }
return <>
<article >
  <form className='form' onSubmit={submitHandler}>
    <input type='text' name='text' id='text' ref={refContainer}></input>
    <button type='submit' className='btn'>submit</button>
  </form>
</article>
</>
};

export default UseRefBasics;
