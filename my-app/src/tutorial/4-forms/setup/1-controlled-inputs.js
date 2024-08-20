import React, { useEffect, useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [people, setPeople] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(username && email){
      const person = {username, email}
      setPeople((people)=>{
        return [...people, person]})
    }
    setUsername(``)
    setEmail(``)
    
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      {people.map((person, index)=>{
        const {username, email} = person
        console.log(person);
        return (<div className="item" key={index}>
          <h3>{username}</h3>
          <p>{email}</p>
        </div>)
      })}
    </>
  );
};

export default ControlledInputs;
