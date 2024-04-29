// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet,  } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from './contexts/AuthContext';
import LandingPage from './LandingPage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiNhrN6CT4yCm9siZcZTi_brtKp1lLihk",
  authDomain: "mywater-abc.firebaseapp.com",
  projectId: "mywater-abc",
  storageBucket: "mywater-abc.appspot.com",
  messagingSenderId: "991621591966",
  appId: "1:991621591966:web:528ef4a8e71037506a5c8f",
  measurementId: "G-XN4G7LXK1D"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const App = () => {
  const [user, setUser] = useState(null);
  const { login, token } = useAuth();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
      if (user != null) {
        loginUser();
      }

    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [user]); // Add user as a dependency

  useEffect(() => {


  }, [user]); // Log user when it changes



  const loginUser = async () => {
    console.log(`user logging in ${user == null} `);
    try {
      // Assuming you have some data to send in the request body, replace {} with your actual data.
      const postData = {
        email_address: user.email,
        password: user.uid,
        role: 'client',
      };

      const response = await axios.post(`https://api.mywater.agency/auth/account_login`, postData);

      console.log(response.data.token);
      // Handle the response as needed
      login(response.data.token);
      console.log(`printing tokennnnn ${token}`);


      if (response.data.status == 404) {
        registerUser();
      }


    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  const registerUser = async () => {
    try {
      // Assuming you have some data to send in the request body, replace {} with your actual data.
      const postData = {
        user_uid: user.uid,
        email_address: user.email,
        user_name: user.displayName,
        role: 'client',
        password: user.uid,
      };

      const response = await axios.post(`https://api.mywater.agency/auth/account_registration`, postData);

      // Handle the response as needed
      console.log(response.data);

      login(response.data.token);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };


  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route
            index
            element={<LandingPage userData={user} />} />
          
        </Routes>
      </div>
    </Router>
  );
};


export default App;