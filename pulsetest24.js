import React, { useState, useEffect } from 'react';

// Removed unused variable: const unusedVariable = "I am never used";

function BrokenComponent(props) {
  const [count, setCount] = useState(0);

  // Fix 1: Move useEffect unconditionally to top level; gate logic inside the effect body
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  // Fix 2: Add props.title to dependency array to avoid stale closure
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  // Fix 9: Removed unusedFunction that was never called

  // Fix 3: Removed direct state mutation (count = count + 1) — use setCount in onClick instead

  // Fix 7: Use strict equality (===) instead of loose equality (==)
  if (count === 5) {
    console.log("count is five");
  }

  // Fix 10: Removed console.log("render") from render body

  // Fix 11: Renamed inner variable to avoid shadowing outer name2
  const name2 = "outer";
  function printName() {
    const name2Inner = "inner";
    console.log(name2Inner);
  }
  // name2 is used to demonstrate the outer scope variable
  console.log(name2);
  printName();

  const items = ["apple", "banana", "cherry"];

  return (
    // Fix 4: Changed class to className
    <div className="container">
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Fix 5: Added key prop to list items */}
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}

      {/* Fix 6: Added alt attribute to img for accessibility */}
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}

export default BrokenComponent;