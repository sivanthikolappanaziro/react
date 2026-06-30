import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    if (props.loggedIn) {
      console.log('Logged in');
    }
  }, [props.loggedIn]);

  if (props.loggedIn) {
    return <div>Welcome back!</div>;
  }

  return <div>Please log in.</div>;
}

export default MyComponent;