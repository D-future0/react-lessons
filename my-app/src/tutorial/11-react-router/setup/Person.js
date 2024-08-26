import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams()
  const [name, setName] = useState(`default name`)
  const personName = data.find(person=>person.id === parseInt(id)
  )
  useEffect(()=>{
    setName(personName.name)
    console.log(personName.name)
  }, [])

console.log(id)
console.log(personName.name)
  return (
    <div>
      <h2>{name}</h2>
      <Link to={`/people`} className='btn'>Back to people</Link>
    </div>
  );
};

export default Person;
