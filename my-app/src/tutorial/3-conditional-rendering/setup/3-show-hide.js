import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Item />}
      <button className="btn" onClick={() => setShow(!show)}>
        show button
      </button>
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const resize = () => {
    return setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener(`resize`, resize);
    return () => {
      window.removeEventListener(`resize`, resize);
    };
  });
  return (
    <>
      <h2>window size : {size}</h2>
    </>
  );
};
export default ShowHide;
