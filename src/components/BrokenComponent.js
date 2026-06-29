import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fix 1: useEffect moved to top level, condition inside callback
  useEffect(() => {
    if (props.loggedIn) {
      // side-effect gated inside the callback
    }
  }, [props.loggedIn]);

  // ✅ Fix 2: Added props.title to dependency array
  useEffect(() => {
    // ✅ Fix 5: Removed console.log from effect
  }, [props.title]);

  // ✅ Fix 10: Removed unusedFunction

  // ✅ Fix 3: Removed direct state mutation (count = count + 1)

  // ✅ Fix 4: === instead of ==
  if (count === 5) {
    // ✅ Fix 5: Removed console.log("five")
  }

  // ✅ Fix 5: Removed console.log("render")

  // ✅ Fix 6: Renamed outer variable to avoid shadowing; removed unused name2
  function printName() {
    const nameInner = "inner";
    // ✅ Fix 5: Removed console.log from printName
  }

  // ✅ Fix 7: Added key prop to list items
  const items = ["A", "B", "C"];

  return (
    // ✅ Fix 8: className instead of class
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

      {/* ✅ Fix 12: Added alt attribute */}
      <img src="/logo.png" alt="Logo" />

      <p>{props.description}</p>
    </div>
  );
}