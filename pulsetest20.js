import React, { useState } from 'react';

// PulseTest20 - Counter Component
// Tests basic React state management with useState hook

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Helper to get message based on count
  function getCountMessage(value) {
    if (value === 0) {
      return 'Counter is at zero';
    } else if (value > 0) {
      return `Counter is positive: ${value}`;
    } else {
      return `Counter is negative: ${value}`;
    }
  }

  // Update message whenever count changes
  function handleIncrement() {
    // NOTE: Do NOT mutate state directly. The line below was removed:
    // count = count + 1;  // BUG: const reassignment - TypeError crash on every render
    setCount(count + 1);
    setMessage(getCountMessage(count + 1));
  }

  function handleDecrement() {
    setCount(count - 1);
    setMessage(getCountMessage(count - 1));
  }

  function handleReset() {
    setCount(0);
    setMessage('Counter reset to zero');
  }

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      {message && <p className="message">{message}</p>}
      <div className="buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Counter;