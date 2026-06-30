/**
 * pulsetest22.js
 *
 * BrokenComponent — a demonstration React component.
 *
 * This component renders a simple UI with:
 *  - A logged-in effect that respects the Rules of Hooks (hook called unconditionally).
 *  - A title-logging effect with correct dependency array.
 *  - A counter backed by useState, incremented through setCount (not direct mutation).
 *  - Strict equality comparisons.
 *  - No shadowed variables.
 *  - No unused variables or functions.
 *  - Proper JSX attributes (className instead of class).
 *  - Keyed list items to support efficient reconciliation.
 *  - An accessible image with alt text.
 */

import React, { useState, useEffect } from 'react';

/**
 * BrokenComponent
 *
 * Props:
 *  - loggedIn  {boolean}  Whether the current user is authenticated.
 *  - title     {string}   Title string logged whenever it changes.
 *  - items     {string[]} List of item strings to render.
 */
function BrokenComponent(props) {
  const [count, setCount] = useState(0);
  const name2 = 'outer';

  // ✅ Fix 1: useEffect called unconditionally; conditional is INSIDE the effect body.
  useEffect(() => {
    if (props.loggedIn) {
      console.log('Logged in');
    }
  }, [props.loggedIn]);

  // ✅ Fix 3: dependency array includes props.title so the effect stays up-to-date.
  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  /**
   * printName — logs the outer name2 value.
   * ✅ Fix 9: inner variable renamed to innerName to avoid shadowing outer name2.
   */
  function printName() {
    const innerName = 'inner';
    console.log(innerName);
    console.log(name2);
  }

  /**
   * handleIncrement — increments count via setCount.
   * ✅ Fix 2: no direct const reassignment; state updated through the setter.
   * ✅ Fix 8: strict equality used (=== instead of ==).
   */
  function handleIncrement() {
    const next = count + 1;
    setCount(next);
    if (next === 5) {
      printName();
    }
  }

  // ✅ Fix 4: className used instead of the invalid HTML attribute class.
  // ✅ Fix 5: key prop added to each mapped list item.
  // ✅ Fix 12: img has a descriptive alt attribute.
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <ul>
        {props.items.map(item => (
          <div key={item}>{item}</div>
        ))}
      </ul>
      <img src="/logo.png" alt="Application logo" />
    </div>
  );
}

export default BrokenComponent;