import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fixed: useEffect moved outside conditional, guarded internally
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // ✅ Fixed: Added props.title to dependency array
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // ✅ Fixed: Removed unusedFunction (was never called or exported)

  // ✅ Fixed: Removed direct const reassignment (count = count + 1)

  // ✅ Fixed: === instead of ==
  if (count === 5) {
    console.log("five");
  }

  // ✅ Fixed: Removed debug console.log("render")

  // ��� Fixed: Renamed inner variable to avoid shadowing
  const name2 = "outer";
  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  // ✅ Fixed: key prop added in list rendering
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

      <img src="/logo.png" alt="Company logo" />

      <p>{props.description}</p>
    </div>
  );
}