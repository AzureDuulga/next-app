import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Нэмэх
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Хасах
      </button>
    </>
  );
};

export default Count;
