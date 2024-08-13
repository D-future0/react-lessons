import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const delayIncrease = () => {
    setTimeout(() => { setValue( delayValue => {
      return delayValue + 1
    })
    }, 3000)
  }
  const delayDecrease = () => {
    setTimeout(() => { setValue( delayValue => {
      return delayValue - 1
    })
    }, 3000)
  }
  return <>
  <section style={{ margin: `4rem 0` }}>
    <h2>counter project</h2>
    <h2>{value}</h2>
    <button type='button' className='btn' onClick={() => setValue(value + 1)}>increase</button>
    <button type='button' className='btn' onClick={() => setValue(0)}>reset</button>
    <button type='button' className='btn' onClick={() => setValue(value - 1)}>decrease</button>
  </section>
  <section style={{ margin: `4rem 0` }}>
    <h2>counter project</h2>
    <h2>{value}</h2>
    <button type='button' className='btn' onClick={delayIncrease}>delay increase</button>
    <button type='button' className='btn' onClick={() => setValue(0)}>reset</button>
    <button type='button' className='btn' onClick={delayDecrease}>delay decrease</button>
  </section>
  </>
};

export default UseStateCounter;
