import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <>
            <SinglePerson
              key={person.id}
              {...person}
              removePerson={removePerson}
            />
          </>
        );
      })}
    </>
  );
};

const SinglePerson = ({ name, id, removePerson }) => {
  // console.log(name);
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button
          type="button"
          onClick={() => {
            removePerson(id);
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default PropDrilling;
