import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const clickHandler = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    return setPeople(newPeople)
  };

  return <React.Fragment>
    {people.map((people) => {
      const {id, name} = people;
      return <div key={id} className='item'>
        <h3>{name}</h3>
        <button type='button' onClick={() => clickHandler(id)}>remove</button>
      </div>
    })}
    <button type='button' className='btn' onClick={() => setPeople([])}>clear item</button>
  </React.Fragment>;
};

export default UseStateArray;
