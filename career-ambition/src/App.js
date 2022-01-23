import React,{ useEffect, useState}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase-config';

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import Commitments from "./components/Commitment/Commitments";
import CalendarView from "./components/Calendar/CalendarView";

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [currentUser, setCurrentUser] =useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(auth.currentUser)
        console.log(auth.currentUser)
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
        <Route exact path="dashboard" element={<Dashboard currentUser={currentUser}/>} />
        <Route exact path="commitment" element={<Commitments currentUser={currentUser}/>} />
        <Route exact path="calendar" element={<CalendarView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
