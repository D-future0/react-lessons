import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const complexIncrease = ()=>{
    setTimeout(()=>{
      setValue((value)=>{
        return value + 1
      })
    }, 2000)
  }

  return <>
    <div>
    <h2>counter</h2>
    <h2>{value}</h2>
    <button className='btn' onClick={()=>setValue(value - 1)}>decrease</button>
    <button className='btn' onClick={()=>setValue(0)}>rest</button>
    <button className='btn' onClick={()=>setValue(value + 1)}>increase</button>
    </div>
    <div style={{margin: `4rem 0rem`}}>
    <h2>counter</h2>
    <h2>{value}</h2>
    <button className='btn' onClick={complexIncrease}>increase</button>
    </div>
  </>

};

export default UseStateCounter;
