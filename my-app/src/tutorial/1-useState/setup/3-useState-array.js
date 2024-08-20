import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [names, setNames] = React.useState(data)
  const clickHandler = ()=>{
    setNames([])
  }
  const removeName = (id)=>{
    const newNames = names.filter(names => names.id !== id);
    setNames(newNames)
  }

  return (<React.Fragment>
    {names.map(names =>{
      const { id, name } = names;
      console.log(names)
      return (<div className='item' key={id} ><h3>{name}</h3>
      <button type='button' className='btn' onClick={()=> removeName(id)}>remove</button>
      </div>)
    })}
    <button type='button' className='btn' onClick={clickHandler}>clear all</button>
  </React.Fragment>);
};

export default UseStateArray;
