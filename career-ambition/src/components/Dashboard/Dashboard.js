import React, { useState, useEffect, useRef } from 'react'

import { doc, query, getDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import { getDocCareerAmbition, addNewDocCA } from '../../firebase/firebase-config';

import Aside from '../Aside/Aside';

import { Icon } from '@iconify/react';
import Swal from "sweetalert2";

import MainGoals from './MainGoals';
import './dashboard.scss';


const Dashboard = ({ currentUser, handleTextCareer, handleInfoBtn }) => {
    const { uid } = currentUser;

    const [user, setUser] = useState({});
    const [infos, setInfos] = useState([]);

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

    const handleCareerAmbitionText = (newAmbition) => {
        setCareerAmbition(newAmbition)
    }

    

    const saveDataCA = (careerAmbitions) => {
        if (careerAmbitions !== '') {
            let obj = {
                textCareerAmbition: careerAmbitions,
                year: new Date()
            }
            addNewDocCA(currentUser.uid, new Date().getFullYear(), obj)
                .then(() => {
                    setCareerAmbition('')
                })
                .catch((error) => {
                    throw error;
                });
        } else {

            Swal.fire({
                title: 'Please, add a career ambition',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });

            //alert('Please, select a period')
        }
    }

    useEffect(() => {
        getDocCareerAmbition(currentUser.uid).then((res) => {
            if (res.length !== 0) {
                handleCareerAmbitionText(res[0].textCareerAmbition)
            } else {
                handleCareerAmbitionText('')
            }
        }).catch((error) => {
            throw error;
        });
    }, []);

    let [mainGoalText, setMainGoalText] = useState('')
    useEffect(() => {
        const getMainGoals = async (uid) => {
            try {
                onSnapshot(query(collection(db, 'careerAmbitions')), (querySnapshot) => {
                    const documents = [];
                    querySnapshot.forEach((doc) => {
                        //console.log(doc.id, " => ", doc.data()); 
                        if (doc.id.includes(uid)) {
                            //console.log('Estos son: ', doc.id, " => ", doc.data());
                            documents.push({ id: doc.id, ...doc.data() });
                        }
                    });
                    setInfos(documents)
                    setMainGoalText(infos[0].mainGoal)
                })

            } catch (error) {
                console.log(error);
            }
        }
        
        getMainGoals(uid);
        
    }, [infos]);

    const onClickOutSide = (e) => {
        // Check if user is clicking outside of <input>
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setIsInputActive(false)  // Disable text input
        }
    }

    /*useEffect(() => {
        if (isInputActive) {
            document.addEventListener('mousedown', onClickOutSide);
        }

        return () => {
            document.removeEventListener('mousedown', onClickOutSide)
        }
    })*/
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
                                    onChange={(e) => { handleCareerAmbitionText(e.target.value) }}
                                />
                                <button className="createCareer" type="button" onClick={() => {setIsInputActive(false); saveDataCA(careerAmbition) }} >
                                    <Icon icon="akar-icons:check-box-fill" color="#03588c" height="40" />
                                </button>
                            </>
                        ) : (
                            <textarea
                                type='text' defaultValue={careerAmbition} disabled 
                            />
                        )}
                        <button className="editCareer" onClick={() => setIsInputActive(true)}>
                            <Icon icon="mdi-light:pencil" color="#03588c" height="40" />
                        </button>
                    </div>
                    <div className="smart-goal">
                        <h3>Current SMART Goal</h3>
                        <p>{mainGoalText}</p>
                    </div>
                    <MainGoals infos={infos} handleInfoBtn={handleInfoBtn} />

                </div>
            </div>
        </>
    )
}

export default Dashboard;