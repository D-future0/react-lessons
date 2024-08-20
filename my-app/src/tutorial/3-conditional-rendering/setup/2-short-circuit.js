import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(``);
  const firstValue = text || "hello world";
  const secondValue = text && "hola world";

  return (
    <>
      {/* {text || `hello!`}
  {text && `whatsup`} */}

      {text ? (
        <>
          <h2>there is no error</h2>
        </>
      ) : (
        <>
          <h2>error</h2>
        </>
      )}
      <button className="btn" onClick={() => setText(!text)}>
        toggle button
      </button>
    </>
  );
};

export default ShortCircuit;
