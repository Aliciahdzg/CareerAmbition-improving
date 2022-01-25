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
        setCurrentUser(user)
        console.log(user)
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    });
 }, []);
  console.log(isLoggedIn) 

  let [textCareer, setTextCareer] = useState('');
  const handleTextCareer = (newText) => {
    setTextCareer(newText)
  }
  let [infoBtn, setInfoBtn] = useState({
    period: '',
    year:'',
    mode:''
  })
  const handleInfoBtn = (periods, years, modes) => {
    setInfoBtn({
      period: periods,
      year: years,
      mode: modes
    })
  }

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="dashboard" element={<Dashboard currentUser={currentUser} handleTextCareer={handleTextCareer} handleInfoBtn={handleInfoBtn}/>} />
        <Route exact path="commitment" element={<Commitments currentUser={currentUser} textCareer={textCareer} infoBtn={infoBtn} handleInfoBtn={handleInfoBtn}/>} />
        <Route exact path="calendar" element={<CalendarView infoBtn={infoBtn} handleInfoBtn={handleInfoBtn}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
