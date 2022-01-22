import React,{ useEffect, useState}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase-config';

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import Commitments from "./components/Commitment/Commitments";
import Calendar from "./components/Calendar/Calendar";

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [userName, setUserName] =useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(auth.currentUser.uid)
        console.log(auth.currentUser.uid)
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    });
  }, []);
  console.log(isLoggedIn)


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="commitment" element={<Commitments userName={userName}/>} />
        <Route exact path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
