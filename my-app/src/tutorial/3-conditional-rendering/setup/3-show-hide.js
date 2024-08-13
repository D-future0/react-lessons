import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return <>
  <h2 style={{ margin: `5rem`}}>{show || <Comp />}</h2>
  <button type='button' className='btn' onClick={()=> setShow(!show)}>show/hide</button>
  </>;
};
const Comp = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
      return ()=>{
        window.removeEventListener('resize', () => {
          setSize(window.innerWidth);})
      }
    }, [])
  })
    return <>
    window size:{size}
    </>
}

export default ShowHide;
