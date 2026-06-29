import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Hook moved to top level; condition gated inside callback
  useEffect(() => {
    if (props.loggedIn) {
      // side-effect only when logged in
    }
  }, [props.loggedIn]);

  // ✅ Dependency array now includes props.title
  useEffect(() => {
    // intentionally empty – console.log removed
  }, [props.title]);

  // ❌ Unused function removed

  // ❌ Direct state mutation removed

  // ✅ === used for strict equality
  if (count === 5) {
    // intentionally empty – console.log removed
  }

  // ✅ console.log("render") removed

  // ✅ Shadowed variable and unused outer name2 removed; printName uses a local
  function printName() {
    const innerName = "inner";
    // console.log removed
    void innerName;
  }

  // ✅ Missing key in list fixed
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