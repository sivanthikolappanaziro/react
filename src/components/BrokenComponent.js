import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Fix 1: Hook moved outside conditional — side-effect gated internally
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // Fix 2: Added props.title to dependency array
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // Fix 3: Direct state mutation removed — use setCount(count + 1) via the button onClick instead

  // Fix 4: Loose equality replaced with strict equality
  if (count === 5) {
    console.log("five");
  }

  // Fix 5: console.log removed from render path

  // Fix 6: Renamed inner variable to avoid shadowing
  const outerName = "outer";
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // Fix 7: Added key prop to list items
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

      {/* Fix 8: Added alt attribute to img */}
      <img src="/logo.png" alt="Logo" />

      <p>{props.description}</p>
    </div>
  );
}