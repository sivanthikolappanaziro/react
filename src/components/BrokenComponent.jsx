import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Hook moved outside conditional; guard logic inside callback
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // ✅ Dependency array now includes props.title
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // ✅ Strict equality
  if (count === 5) {
    // count equals 5
  }

  // ✅ Shadowed variable renamed
  const name2 = "outer";
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // ✅ items list
  const items = ["A", "B", "C"];

  return (
    <div className="container">
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}

      <button onClick={printName}>
        Print
      </button>

      <img src="/logo.png" alt="Company logo" />

      <p>{props.description}</p>
    </div>
  );
}