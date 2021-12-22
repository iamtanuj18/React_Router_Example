import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  return (
    <>
      <h1>Size is :{size}px</h1>
    </>
  );
};

export default UseEffectCleanup;