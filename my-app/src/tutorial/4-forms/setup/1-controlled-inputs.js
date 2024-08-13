import React, { useEffect, useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    if (username &&  email) {
      const person = { id: new Date().getTime.toString(),username, email };
      setPeople((people) => {
        return [...people, person]
      })
      setEmail('')
      setUsername('')
    } else {
      console.log('empty value')
    }
  }
  return <>
    <article>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='userName'>Username : </label>
          <input type='text' id='userName' name='userName' value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
        </div>

        <div className='form-control'>
          <label htmlFor='email'>email : </label>
          <input type='email' id='email' name='email' value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
        </div>
        <button type='submit' className='btn'>add user</button>
      </form>
      {people.map((person) => {
        const { id, username, email } = person
        return <div className='item' key={id} >
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
      })}
    </article>
  </>;
};

export default ControlledInputs;
