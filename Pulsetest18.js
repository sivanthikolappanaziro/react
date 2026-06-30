import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    if (props.loggedIn) {
      console.log("Logged in");
    }
  }, [props.loggedIn]);

  return <div>{props.loggedIn ? "Welcome!" : "Please log in"}</div>;
}

export default MyComponent;