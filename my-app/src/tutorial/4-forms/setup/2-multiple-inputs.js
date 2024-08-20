import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({username:``, email:``, phoneNumber:``});
  const [people, setPeople] = useState([]);
 const changeHandler = (e)=>{
  const name = e.target.name
    const value = e.target.value 
    setPerson({ ...person, [name]:value })
 }
  const submitForm = (e) => {
    const name = e.target.name
    const value = e.target.value
    e.preventDefault();
    if (person.username && person.email && person.phoneNumber) {
      setPeople((people) => {
        return [...people, person];
      });
      setPerson({username:``, email:``, phoneNumber:``})
    }
    // setPerson({username:``, email:``, phoneNumber:``});
    // setEmail(``);
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="username">username : </label>
            <input
              type="text"
              name="username"
              id="username"
              value={person.username}
              onChange={changeHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={changeHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">phoneNumber : </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={person.phoneNumber}
              onChange={changeHandler}
            ></input>
          </div>
          <button
            className="btn"
            onClick={(e) => {
              submitForm(e);
            }}
          >
            submit form
          </button>
        </form>
      </article>
      {people.map((person, index) => {
        const { username, email, phoneNumber } = person;
        console.log(person);
        return (
          <div className="item" key={index}>
            <h3>{username}</h3>
            <p>{phoneNumber}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
