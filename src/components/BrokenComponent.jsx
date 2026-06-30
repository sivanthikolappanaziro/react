import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Hook moved outside conditional; guard logic inside effect body
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // ✅ Added props.title to dependency array
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // ✅ Removed unusedFunction

  // ✅ Removed direct state mutation (count = count + 1)

  // ✅ Strict equality
  if (count === 5) {
    // count is 5
  }

  // ✅ Removed console.log("render")

  // ✅ Renamed outer variable to avoid shadowing
  const componentName = "outer";
  function printName() {
    const name2 = "inner";
    console.log(name2);
  }

  // ✅ Added key prop to list items
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

      {items.map(item => (
        <div key={item}>{item}</div>
      ))}

      <button onClick={printName}>
        Print
      </button>

      <img src="/logo.png" alt="Logo" />

      <p>{props.description}</p>
    </div>
  );
}