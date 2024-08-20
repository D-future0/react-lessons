import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";

const Index = () => {
  const initialState = {
    people: [],
    isModal: false,
    modal_content: ``,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState(``);

  const changeHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (name) {
      const person = { name, id: new Date().getTime().toString() };
      dispatch({ type: `ADD_PERSON`, newValue: person });
      setName(``);
      console.log(person);
    } else {
      dispatch({ type: `NO_VALUE` });
    }
  };
  const closeModal = () => {
    dispatch({ type: `CLOSE_MODAL` });
  };
  return (
    <>
      {state.isModal && (
        <Modal close_modal={closeModal} modal_content={state.modal_content} />
      )}
      <article>
        <form className="form">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              changeHandler(e);
            }}
          ></input>
          <button
            type="button"
            className="btn"
            onClick={(e) => clickHandler(e)}
          >
            submit
          </button>
        </form>
      </article>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: `REMOVE_ITEM`, personId: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
