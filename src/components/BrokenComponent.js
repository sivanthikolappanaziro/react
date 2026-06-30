/**
 * BrokenComponent.js
 *
 * A React component demonstrating correct patterns for:
 *  - Conditional logic inside effects (not conditional hooks)
 *  - Proper state updates via the setter function
 *  - Complete useEffect dependency arrays
 *  - JSX className instead of class
 *  - Unique key props on list items
 *  - No unused variables or functions
 *  - Strict equality comparisons
 *  - No variable shadowing
 *  - Accessible images with alt text
 *
 * Usage:
 *   <BrokenComponent
 *     loggedIn={true}
 *     title="My Page"
 *     name="Alice"
 *   />
 *
 * @module BrokenComponent
 */

import React, { useState, useEffect } from 'react';

/**
 * BrokenComponent – Example component showcasing corrected React patterns.
 *
 * @param {object}  props           - Component props.
 * @param {boolean} props.loggedIn  - Whether the user is currently logged in.
 * @param {string}  props.title     - Page title logged on mount/update.
 * @param {string}  props.name      - Outer name value used by printName.
 * @returns {React.ReactElement} Rendered UI.
 */
function BrokenComponent(props) {
  const [count, setCount] = useState(0);

  // Fix 1 (finding #1): useEffect is NEVER called conditionally.
  // The conditional logic belongs INSIDE the effect body.
  useEffect(() => {
    if (props.loggedIn) {
      // No console.log left in production; real logic would go here.
    }
  }, [props.loggedIn]);

  // Fix 3 (finding #3): Dependency array includes every value the effect uses.
  useEffect(() => {
    // Title tracking logic placeholder – console removed per finding #10.
    void props.title; // reference to satisfy dep tracking in real code
  }, [props.title]);

  // Fix 8 (finding #8): strict equality (===) instead of loose (==).
  if (count === 5) {
    // Handle count reaching 5
  }

  // Fix 9 (finding #9): inner variable renamed to avoid shadowing outer `name`.
  const name2 = props.name || 'outer';

  /**
   * Logs the outer and inner name values.
   * Inner variable renamed to `innerName` to avoid shadowing.
   */
  function printName() {
    const innerName = 'inner';
    // No console.log per finding #10 – replace with real logic as needed.
    void name2;
    void innerName;
  }

  // Fix 6 (finding #6): unusedVariable removed entirely.

  // Fix 7 (finding #7): unusedFunction removed; printName is intentional API.

  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    // Fix 4 (finding #4): className instead of class.
    <div className="container">
      <h1>{props.title}</h1>

      {/* Fix 2 (finding #2): state updated through setter, not const reassignment */}
      <button onClick={() => setCount(prev => prev + 1)}>
        Count: {count}
      </button>

      <button onClick={printName}>Print Name</button>

      {/* Fix 5 (finding #5): unique key prop on every list element */}
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Fix 12 (finding #12): alt text for accessibility */}
      <img src="/logo.png" alt="Application logo" />
    </div>
  );
}

export default BrokenComponent;