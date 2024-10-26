import React, { useEffect } from 'react';

function LoggedIn() {
  useEffect(() => {
    // alert("User Logged In")
    let x = 0;
    const intervalId = setInterval(() => {
      console.log(`You are logged in for - ${++x} seconds`);
    }, 1000);

    return () => {
      console.log('User Logged out');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>User Logged In</h1>
      <h3>Name: Abebe</h3>
      <h3>BootCamp: Evangadi</h3>
      <h3>Group: 5</h3>
    </div>
  );
}

export default LoggedIn;
