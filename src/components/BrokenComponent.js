import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // FIX #1: useEffect moved outside conditional; condition gated inside effect body
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // FIX #3: dependency array now includes props.title
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // FIX #9: strict equality
  if (count === 5) {
    console.log("five");
  }

  // FIX #11: inner variable renamed to innerName to avoid shadowing
  const name2 = "outer";
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // FIX #5: items defined for the list
  const items = ["A", "B", "C"];

  return (
    // FIX #4: class → className
    <div className="container">
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* FIX #5: key prop added to list items */}
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}

      <button onClick={printName}>
        Print
      </button>

      {/* FIX #6: alt attribute added */}
      <img src="/logo.png" alt="Company logo" />

      <p>{props.description}</p>
    </div>
  );
}