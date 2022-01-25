import React, { useState, useEffect, useRef } from 'react'

import { doc,query, getDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import Aside from '../Aside/Aside';

import { Icon } from '@iconify/react';

import MainGoals from './MainGoals';
import './dashboard.scss';


const Dashboard = ({ currentUser, handleTextCareer, handleInfoBtn}) => {
    const  { uid }  = currentUser;

    const [user, setUser] = useState({});
    const [info, setInfo] = useState([]);
    
    const inputRef = useRef(null);
    const [careerAmbition, setCareerAmbition] = useState('');
    const [isInputActive, setIsInputActive] = useState(false);

    useEffect(() => {
        const getUser = async (uid) => {
            const docRef = doc(db, 'users', uid);
            const docSnap = await getDoc(docRef);
            setUser(docSnap.data())
        }
        return getUser(uid);
    }, []);
    
    useEffect(() => {
        const getMainGoals = async (uid) => {
            try {
                onSnapshot(query(collection(db, 'careerAmbitions')), (querySnapshot) => {
                    const documents = [];    
                    querySnapshot.forEach((doc) => {
                            //console.log(doc.id, " => ", doc.data()); 
                        if (doc.id.includes(uid)) {
                            //console.log('Estos son: ', doc.id, " => ", doc.data());
                            documents.push({id: doc.id, ...doc.data()});
                            }
                        });
                        setInfo(documents)
                })
            
            } catch (error) {
                console.log(error);
              }
    }
    return getMainGoals(uid);
    }, []);
    
    const onClickOutSide = (e) => {
        // Check if user is clicking outside of <input>
        if (inputRef.current &&  !inputRef.current.contains(e.target)) {
            setIsInputActive(false)  // Disable text input
        }
    }

   useEffect(() => {
        if (isInputActive) {
            document.addEventListener('mousedown', onClickOutSide );
        }

        return () => {
            document.removeEventListener('mousedown', onClickOutSide)
        }
    })
    const handleCareerAmbition = () => careerAmbition

    return (
        <>
            <Aside handleInfoBtn={handleInfoBtn}/>
            <div className='container-dashboard'>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <div className='career-ambition'>
                    <h2>Career Ambition</h2>
                    <div className='careerText-editButton'>
                        {isInputActive ? (
                            <>
                              <textarea
                                  ref={inputRef}
                                  value={careerAmbition}
                                  onChange={(e) => {setCareerAmbition(e.target.value); handleTextCareer(e.target.value)}} 
                              />
                               <button className="createCareer" type="button" onClick={() => handleCareerAmbition()} >
                                  <Icon icon="akar-icons:check-box-fill" color="#03588c" height="40" />
                              </button>
                            </>
                        ) : (
                            <p>{careerAmbition}</p> 
                        )}
                        <button className="editCareer" onClick={() => setIsInputActive(true)}>
                            <Icon icon="mdi-light:pencil" color="#03588c" height="40" />
                        </button>
                    </div>
                    <div className="smart-goal">
                        <h3>Current SMART Goal</h3>
                        <p></p>
                    </div>
                        <MainGoals info={info} handleInfoBtn={handleInfoBtn}/>
                    
                </div>
            </div>
        </>
    )
}

export default Dashboard;