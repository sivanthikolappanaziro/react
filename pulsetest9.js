import React, { useState, useEffect } from "react";

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  const name2 = "outer";

  function printName() {
    const innerName = "inner";
    console.log(innerName);
  }

  const items = ["apple", "banana", "cherry"];

  if (count === 5) {
    console.log("count is five");
  }

  return (
    <div className="container">
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={printName}>Print Name</button>
      <p>{name2}</p>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}

export default MyComponent;