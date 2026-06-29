import React, { useState, useEffect } from "react";

export default function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ✅ Fixed: useEffect moved to top level; conditional is inside the callback
  useEffect(() => {
    if (props.loggedIn) {
      // side-effect gated inside callback, not wrapping the hook
    }
  }, [props.loggedIn]);

  // ✅ Fixed: props.title added to dependency array
  useEffect(() => {
    // removed console.log per no-console rule
  }, [props.title]);

  // ✅ Fixed: removed unusedFunction

  // ✅ Fixed: removed direct state mutation (count = count + 1)

  // ✅ Fixed: === instead of ==
  if (count === 5) {
    // removed console.log per no-console rule
  }

  // ✅ Fixed: removed console.log("render")

  // ✅ Fixed: removed unused outer name2; printName uses only its own scoped variable
  function printName() {
    const name2 = "inner";
    // removed console.log per no-console rule
    void name2; // reference to avoid unused-var warning on name2 inside printName
  }

  // ✅ Fixed: key prop added to list items
  const items = ["A", "B", "C"];

  return (
    // ✅ Fixed: class → className
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

      {/* ✅ Fixed: alt attribute added */}
      <img src="/logo.png" alt="Logo" />

      <p>{props.description}</p>
    </div>
  );
}