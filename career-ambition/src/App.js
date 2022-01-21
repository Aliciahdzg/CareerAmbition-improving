import React,{ useEffect, useState}from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/firebase-config';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import Commitments from "./components/Commitment/Commitments";
import Calendar from "./components/Calendar/Calendar"
function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
        <Route exact path="commitment" element={<Commitments />} />
        <Route exact path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
