import React, { useState, useEffect } from "react";

export default function BrokenComponent(props: {
  loggedIn?: boolean;
  title?: string;
  description?: string;
}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fix #1: useEffect moved unconditionally; condition inside the callback
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // ✅ Fix #2: props.title added to dependency array
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // ✅ Fix #3: Direct state mutation removed (count = count + 1 deleted)

  // ✅ Fix #4: strict equality === used
  if (count === 5) {
    // reached five
  }

  // ✅ Fix #5: unusedVariable removed
  // ✅ Fix #6: unusedFunction removed
  // ✅ Fix #7: console.log("render") removed

  // ��� Fix #8: renamed inner variable to avoid shadowing
  const name2 = "outer";
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // ✅ Fix #9: key prop added to list items
  const items = ["A", "B", "C"];

  return (
    // ✅ Fix #10: class → className
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

      {/* ✅ Fix #11: alt attribute added */}
      <img src="/logo.png" alt="Company logo" />

      <p>{props.description}</p>
    </div>
  );
}