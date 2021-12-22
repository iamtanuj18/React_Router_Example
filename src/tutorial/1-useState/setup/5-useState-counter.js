import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexCount = () => {
    setTimeout(() => {
      setValue((pre) => {
        return pre + 1;
      });
    }, 3000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          type="button"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button className="btn" type="button" onClick={() => setValue(0)}>
          Reset
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
        <div style={{ padding: "28px" }}>
          <h2>Complex counter</h2>
          <h1>{value}</h1>
          <button className="btn" type="button" onClick={complexCount}>
            Increase
          </button>
        </div>
      </section>
    </>
  );
};

export default UseStateCounter;
