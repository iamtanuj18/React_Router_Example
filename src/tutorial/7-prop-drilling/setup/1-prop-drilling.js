import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop dirlling</h3>
      <List people={people} />
    </section>
  );
};
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <h4>Single item</h4>
    </div>
  );
};

export default PropDrilling;
