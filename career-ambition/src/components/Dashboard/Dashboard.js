import React, { useState, useEffect } from 'react'

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import Aside from '../Aside/Aside';

import { Icon } from '@iconify/react';

import MainGoals from './MainGoals';
import './styles/dashboard.scss';


const Dashboard = ({currentUser}) => {
    const { uid } = currentUser;

   const [user, setUser] = useState({});

   const [careerAmbition, setCareerAmbition] = useState('');
   const [isInputActive, setIsInputActive] = useState(false);

   // const enter = useKeypress('Enter');
 
   const getUser = async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data())
   }
    useEffect(() => {
        getUser(uid);
    },[]);
    
    /*const careerAmbitionEdit = (props) => {
        return (
            <p>
                <textarea />
            </p>
        )
    }*/

    useEffect(() => {
        if (isInputActive) {
            // if Enter is pressed, save the text and case the editor
            if (enter) {

            }
        }
    }, [])
    // const createCareerAmbition = () => {}
    // const handleCareerAmbition => {}

    return (
        <>
            <Aside />
                  <div className='container-dashboard'>
                    <h3>{user.name}</h3>
                     <h4>{user.email}</h4>
                    <div className='career-ambition'>
                       <h2>Career Ambition</h2>
                       <div className='careerText-editButton'>
                          <p>Career Ambition text</p>
                          <textarea value={careerAmbition} onChange={(e) => setCareerAmbition(e.target.value)} className={`career-ambition${isInputActive ?  "active" : "rest"}`} ></textarea>
                          <button>
                             <Icon icon="mdi-light:pencil" color="#03588c" height="40" />
                          </button>
                       </div>
                       <div className="smart-goal">
                           <h3>Current SMART Goal</h3>
                           <p>SMART Goal text</p>
                       </div>
                       <MainGoals />
                    </div>
                  </div>)
         </>
    )
}

export default Dashboard;
