import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Person = () => {
  const [name, setName] = useState();
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2>{name}</h2>
        <h4>{id}</h4>
        <Link to="/People" className="btn">
          Back To People
        </Link>
      </div>
    </>
  );
};

export default Person;
