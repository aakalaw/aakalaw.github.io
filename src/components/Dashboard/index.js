import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './home';
import Login from '../Login';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser && authUser.email === process.env.REACT_APP_MY_EMAIL) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {user ? <Home /> : <Login />}
    </div>
  );
};

export default Dashboard;
