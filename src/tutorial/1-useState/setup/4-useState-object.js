import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "tanuj",
    age: 23,
    message: "hi i m there for you",
  });
  const changeMessage = () => {
    setPerson({
      ...person,
      message: "hello i m also there for you",
    });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" type="button" onClick={changeMessage}>
        Next person
      </button>
    </>
  );
};

export default UseStateObject;
