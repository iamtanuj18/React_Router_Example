import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstname, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [id, setId] = useState("");
  const [persons, setPersons] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.firstName && persons.email) {
      const newPerson = { ...persons, id: uuid() };
      setPeople((people) => {
        return [...people, newPerson];
      });

      setPersons({ firstname: "", email: "" });
    }
  };
  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersons({ ...persons, [name]: value });
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              value={persons.firstname}
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChnage}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              value={persons.email}
              type="email"
              id="email"
              name="email"
              onChange={handleChnage}
            ></input>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
      </article>
      <article>
        {people.map((persons) => {
          const { id, firstName, email } = persons;
          return (
            <div key={id} style={{ padding: "45px" }} className="form">
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <p>{id}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
