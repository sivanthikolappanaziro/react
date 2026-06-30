import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Hook moved outside conditional; guard is inside the effect body
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // ✅ props.title added to dependency array
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // ✅ Direct state mutation removed — use setCount(prev => prev + 1) inside event handlers only

  // ✅ === instead of ==
  if (count === 5) {
    console.log("five");
  }

  // ✅ Shadowed variable renamed; outer name2 removed
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // ✅ key added to list items
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