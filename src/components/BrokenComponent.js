import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fix #1: useEffect moved to top level; conditional inside callback
  useEffect(() => {
    if (props.loggedIn) {
      // (no console.log per Fix #5)
    }
  }, [props.loggedIn]);

  // ✅ Fix #2: Added props.title to dependency array; removed console.log (#5)
  useEffect(() => {
    // console.log removed (Fix #5)
  }, [props.title]);

  // ✅ Fix #10: Removed unusedFunction
  // ✅ Fix #3: Removed direct state mutation (count = count + 1)

  // ✅ Fix #4: === instead of ==
  if (count === 5) {
    // console.log removed (Fix #5)
  }

  // ✅ Fix #5: Removed console.log("render")

  // ✅ Fix #6: Removed unused outer name2; printName uses its own local variable renamed
  function printName() {
    const innerName = "inner";
    // console.log removed (Fix #5)
    return innerName;
  }

  // ✅ Fix #7 & #8: key prop added; className used
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

      {/* ✅ Fix #12: alt attribute added */}
      <img src="/logo.png" alt="Logo" />

      <p>{props.description}</p>
    </div>
  );
}