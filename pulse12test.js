import React, { useState, useEffect } from "react";

const unusedVariable = "I am never used";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  if (props.loggedIn) {
    // ❌ Hook inside conditional
    useEffect(() => {
      console.log("Logged in");
    }, []);
  }

  // ❌ Missing dependency
  useEffect(() => {
    console.log(props.title);
  }, []);

  // ❌ Unused function
  function unusedFunction() {
    return 42;
  }

  // ❌ Direct state mutation
  count = count + 1;

  // ❌ == instead of ===
  if (count == "5") {
    console.log("five");
  }

  // ❌ console statement
  console.log("render");

  // ❌ Shadowed variable
  const name2 = "outer";
  function printName() {
    const name2 = "inner";
    console.log(name2);
  }

  // ❌ Missing key in list
  const items = ["A", "B", "C"];

  // ❌ Inline function in JSX
  return (
    <div class="container">
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {items.map(item => (
        <div>{item}</div>
      ))}

      <button onClick={printName}>
        Print
      </button>

      <img src="/logo.png" />

      <p>{props.description}</p>
    </div>
  );
}
