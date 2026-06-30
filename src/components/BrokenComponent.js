import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fixed: Hook moved outside conditional; condition inside effect body
  useEffect(() => {
    if (props.loggedIn) {
      // logged-in side-effect
    }
  }, [props.loggedIn]);

  // ✅ Fixed: Added props.title to dependency array
  useEffect(() => {
    // intentional: log title changes
  }, [props.title]);

  // ✅ Fixed: eqeqeq — use strict equality and correct type
  if (count === 5) {
    // count reached five
  }

  // ✅ Fixed: Shadowed variable renamed to innerName
  const name2 = "outer";
  function printName() {
    const innerName = "inner";
    // intentional: use innerName
    void innerName;
  }

  // ✅ Fixed: Missing key in list items
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

      {/* ✅ Fixed: alt text added */}
      <img src="/logo.png" alt="Company logo" />

      <p>{props.description}</p>
    </div>
  );
}