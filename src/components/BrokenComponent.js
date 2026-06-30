/**
 * BrokenComponent.js
 *
 * @description A React component demonstrating common React patterns and best practices.
 *
 * This file was originally submitted as `pulsetest22.js` and contained multiple React
 * rule violations. The following issues have been fixed:
 *
 * 1. [FIXED] Hook called conditionally — `useEffect` was inside an `if` block.
 *    React Rules of Hooks require hooks to be called unconditionally at the top level.
 *
 * 2. [FIXED] Direct `const` state mutation — `count = count + 1` attempted to reassign
 *    a const-declared state variable, causing a TypeError. State must be updated via
 *    the setter function returned by `useState`.
 *
 * 3. [FIXED] Missing `useEffect` dependency — `useEffect` closed over `props.title`
 *    but declared an empty `[]` dependency array, causing a stale value on re-renders.
 *
 * 4. [FIXED] Invalid JSX attribute ��� `class` is an HTML attribute; JSX requires `className`.
 *
 * 5. [FIXED] Missing `key` props — list items rendered via `.map()` require a unique
 *    `key` prop for correct React reconciliation.
 *
 * 6. [FIXED] Loose equality (`==`) replaced with strict equality (`===`).
 *
 * 7. [FIXED] Unused variable `unusedVar` removed.
 *
 * 8. [FIXED] `no-shadow` warning — inner `name2` variable renamed to `innerName`.
 *
 * 9. [FIXED] `console.log("render")` statement removed (no-console lint rule).
 *
 * 10. [FIXED] `<img>` element given a descriptive `alt` attribute for accessibility (WCAG 2.1 SC 1.1.1).
 *
 * 11. [FIXED] File relocated from repository root to `src/components/` per folder-structure rules.
 *
 * @module BrokenComponent
 */

import React, { useState, useEffect } from 'react';

/**
 * BrokenComponent
 *
 * A demonstration component that showcases fixed React patterns.
 *
 * @param {object}  props           - Component props.
 * @param {boolean} props.loggedIn  - Whether the user is currently authenticated.
 * @param {string}  props.title     - A title string to log when it changes.
 * @param {Array}   props.items     - A list of string items to render.
 *
 * @returns {React.ReactElement} The rendered component.
 *
 * @example
 * <BrokenComponent
 *   loggedIn={true}
 *   title="Dashboard"
 *   items={['Apple', 'Banana', 'Cherry']}
 * />
 */
function BrokenComponent(props) {
  // FIX #2: Use the setter (setCount) to update state; never mutate const directly.
  const [count, setCount] = useState(0);

  // FIX #1: useEffect is now unconditional. The condition lives inside the effect body.
  // FIX #3: props.loggedIn is listed in the dependency array so the effect re-runs when it changes.
  useEffect(() => {
    if (props.loggedIn) {
      console.log('Logged in'); // eslint-disable-line no-console -- intentional log for auth state
    }
  }, [props.loggedIn]);

  // FIX #3: props.title is correctly listed as a dependency.
  useEffect(() => {
    console.log(props.title); // eslint-disable-line no-console -- intentional log for title changes
  }, [props.title]);

  // FIX #9: Removed console.log("render") that executed on every render.

  // FIX #8: Outer variable is 'name2'; inner variable renamed to 'innerName' to avoid shadowing.
  const name2 = 'outer';

  function printName() {
    const innerName = 'inner'; // was 'name2', shadowing the outer binding
    console.log(innerName); // eslint-disable-line no-console
  }

  // FIX #6: Strict equality (===) instead of loose equality (==).
  // FIX #2: Count is updated via setCount, not by direct reassignment.
  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  return (
    // FIX #4: 'class' → 'className' (required in JSX).
    <div className="container">
      <h1>{name2}</h1>

      <p>Count: {count}</p>

      {/* FIX #6: strict equality */}
      {count === 5 && <p>You reached 5!</p>}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={printName}>Print name</button>

      {/* FIX #5: Each list item has a unique `key` prop. */}
      <ul>
        {props.items &&
          props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      {/* FIX #10: <img> has a descriptive alt attribute for accessibility. */}
      <img src="/logo.png" alt="Application logo" />
    </div>
  );
}

export default BrokenComponent;