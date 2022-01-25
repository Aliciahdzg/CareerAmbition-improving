import React, { useState, useEffect } from 'react';
import './scss/commitments.scss'
import ActionPlan from './ActionPlan'
import Aside from '../Aside/Aside';
import AreasOfFocus from './AreasOfFocus';
import PlannedPractices from './PlannedPractices';
import Accountability from './Accountability';
import DeliberatePractice from './DeliberatePractice';
import { addNewDoc, getDocsPeriods, getDocCareerAmbition } from '../../firebase/firebase-config';
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function Commitments({ currentUser, textCareer, infoBtn, handleInfoBtn }) {
    const navigate = useNavigate();
    const navToDashboard = () => {
        navigate("/dashboard")
      }
    let [info, setInfo] = useState({
        year: new Date().getFullYear(),
        useruid: currentUser.uid,
        period: '',
        mainGoal: '',
        areasOfFocus: [],
        actionPlans: [],
        plannedPractices: [],
        accountability: [],
        deliberatePractice: []
    })


    let [smartGoal, setSmartGoal] = useState('')
    let [dateSmartGoal, setDateSmartGoal] = useState('')

    const addRowsSmartGoal = (goal, date) => {
        if (goal !== '') {
            setInfo({ ...info, actionPlans: [...info.actionPlans, { smartGoal: goal, byWhen: date }] })
            setSmartGoal('')
            setDateSmartGoal('')
        } else {
            Swal.fire({
                title: 'Please, fill at least the SMART Goal',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });
            //alert('Please, fill at least the SMART Goal')
        }
    }

    const handleSmartGoal = (goal) => {
        setSmartGoal(goal)
    }

    const handleDateSmartGoal = (date) => {
        setDateSmartGoal(date)
    }

    let [category, setCategory] = useState('')

    const addRowsCategory = (categ) => {
        if (categ !== '') {
            setInfo({ ...info, areasOfFocus: [...info.areasOfFocus, categ] })
            setCategory('')
        } else {
            Swal.fire({
                title: 'Please, fill all the blank spaces',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });
            //alert('Please, fill all the blank spaces')
        }
    }

    const handleCategory = (categ) => {
        setCategory(categ)
    }

    let [action, setAction] = useState('')
    let [frecuency, setFrecuency] = useState('')

    const addRowsAction = (actions, frec) => {
        if (actions !== '' && frec !== '') {
            setInfo({ ...info, plannedPractices: [...info.plannedPractices, { action: actions, frecuency: frec }] })
            setAction('')
            setFrecuency('')
        } else {
            Swal.fire({
                title: 'Please, fill all the blank spaces',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });

            //alert('Please, fill all the blank spaces')
        }
    }

    const handleActions = (actions) => {
        setAction(actions)
    }

    const handleFrecuency = (frec) => {
        setFrecuency(frec)
    }

    let [mentor, setMentor] = useState('')
    let [when, setWhen] = useState('')
    let [via, setVia] = useState('')

    const addRowsMentor = (mentors, whens, vias) => {
        if (mentors !== '') {
            setInfo({ ...info, accountability: [...info.accountability, { person: mentors, frecuency: whens, vía: vias }] })
            setMentor('')
            setWhen('')
            setVia('')
        } else {
            Swal.fire({
                title: 'Please, fill all the name of your mentor',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });
            //alert('Please, fill the name of your mentor')
        }
    }

    const handleMentor = (mentors) => {
        setMentor(mentors)
    }

    const handleWhen = (whens) => {
        setWhen(whens)
    }

    const handleVia = (vias) => {
        setVia(vias)
    }

    let [practice, setPractice] = useState('')
    let [date, setDate] = useState('')
    let [outcomes, setOutcomes] = useState('')

    const addRowsPractice = (practices, dates, outcome) => {
        if (practices !== '' && dates !== '' && outcome !== '') {
            setInfo({ ...info, deliberatePractice: [...info.deliberatePractice, { action: practices, date: dates, outcomes: outcome }] })
            setPractice('')
            setDate('')
            setOutcomes('')
        } else {
            Swal.fire({
                title: 'Please, fill all the blank spaces',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });

            //alert('Please, fill all the blank spaces')
        }
    }

    const handlePractice = (practices) => {
        setPractice(practices)
    }

    const handleDate = (dates) => {
        setDate(dates)
    }

    const handleOutcomes = (outcome) => {
        setOutcomes(outcome)
    }

    const deleteRow = (keyname, section) => {
        let reg = new RegExp(/[a-zA-Z]+[-][a-zA-Z]+[-]/)
        let id = keyname.replace(reg, '')
        let newArr = []
        for (let i = 0; i < info[section].length; i++) {
            if (Number(id) !== i) {
                newArr.push(info[section][i])
            }
        }
        setInfo({ ...info, [section]: newArr })
    }

    const handlePeriod = (periods) => {
        let arrFiltered = []
        getDocsPeriods(currentUser.uid)
            .then((res) => {
                if (res.length !== 0) {
                    res.forEach((elem) => {
                        if (elem.period === periods && elem.year === new Date().getFullYear()) {
                            arrFiltered.push(elem)
                        }
                    })
                    if (arrFiltered[0] === undefined){
                        setInfo({
                            year: new Date().getFullYear(),
                            useruid: currentUser.uid,
                            period: periods,
                            mainGoal: '',
                            areasOfFocus: [],
                            actionPlans: [],
                            plannedPractices: [],
                            accountability: [],
                            deliberatePractice: []
                        })
                    } else {
                        setInfo(arrFiltered[0])
                    }
                } else {
                    setInfo({ ...info, period: periods })
                }
            })
            .catch((error) => {
                throw error;
            });
    }

   
    useEffect(() => {
        if (infoBtn.period !== ''){
            handlePeriod(infoBtn.period)
        } else {
            setInfo({
                year: new Date().getFullYear(),
                useruid: currentUser.uid,
                period: '',
                mainGoal: '',
                areasOfFocus: [],
                actionPlans: [],
                plannedPractices: [],
                accountability: [],
                deliberatePractice: []
            })
        }
        getDocCareerAmbition(currentUser.uid).then((res)=>{
            if (res.length !==0){
                console.log(res[0])
                handleCareerAmbitionText(res[0].textCareerAmbition)
            } else {
                handleCareerAmbitionText('')
            }
        }).catch((error) => {
            throw error;
        });
    },[]);

    const handleMainGoal = (maingoals) => {
        setInfo({ ...info, mainGoal: maingoals })
    }

    const [careerAmbition, setCareerAmbition] = useState('')
    const handleCareerAmbitionText = (newAmbition) => {
        setCareerAmbition(newAmbition)
    }

    const saveData = () => {
        if (info.period !== '') {
            addNewDoc(currentUser.uid, info.period, info.year, info)
                .then(() => {
                    setInfo({
                        year: new Date().getFullYear(),
                        useruid: currentUser.uid,
                        period: '',
                        mainGoal: '',
                        areasOfFocus: [],
                        actionPlans: [],
                        plannedPractices: [],
                        accountability: [],
                        deliberatePractice: []
                    })
                })
                .catch((error) => {
                    throw error;
                });
        } else {

            Swal.fire({
                title: 'Please, select a period',
                icon: "warning",
                confirmButtonColor: "#5EBFA4",
            });

            //alert('Please, select a period')
        }
    }
    return (
        <div className='body-commitments'>
            <Aside handleInfoBtn={handleInfoBtn}/>
            <div className='container-commitments'>
                <div className='div-period'>
                    <h1 className='h1-commitments'>Period</h1>
                    {infoBtn.mode !== '' ? (<select name="frecuency" className='period-select' onChange={(e) => handlePeriod(e.target.value)} value={info.period} disabled>
                        <option value="" disabled>Q-</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                    </select>): (<select name="frecuency" className='period-select' onChange={(e) => handlePeriod(e.target.value)} value={info.period}>
                        <option value="" disabled>Q-</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                    </select>)
                    }
                </div>
                <div className='div-ambition'>
                    <label htmlFor='careerAmbition' className='label-commitments-ambition'>My Career Ambition is: </label>
                    <input type='text' defaultValue={careerAmbition} disabled />
                </div>
                <div className='div-goal'>
                    <label htmlFor='mainGoal' className='label-commitments-goal'>My main goal is: </label>
                    <input type='text' onChange={(e) => handleMainGoal(e.target.value)} value={info.mainGoal} />
                </div>
                <AreasOfFocus info={info} category={category} addRowsCategory={addRowsCategory} handleCategory={handleCategory} deleteRow={deleteRow} />
                <ActionPlan info={info} smartGoal={smartGoal} dateSmartGoal={dateSmartGoal} addRowsSmartGoal={addRowsSmartGoal} handleSmartGoal={handleSmartGoal} handleDateSmartGoal={handleDateSmartGoal} deleteRow={deleteRow} />
                <PlannedPractices info={info} action={action} frecuency={frecuency} addRowsAction={addRowsAction} handleActions={handleActions} handleFrecuency={handleFrecuency} deleteRow={deleteRow} />
                <Accountability info={info} mentor={mentor} when={when} via={via} addRowsMentor={addRowsMentor} handleMentor={handleMentor} handleWhen={handleWhen} handleVia={handleVia} deleteRow={deleteRow} />
                <DeliberatePractice info={info} practice={practice} date={date} outcomes={outcomes} addRowsPractice={addRowsPractice} handlePractice={handlePractice} handleDate={handleDate} handleOutcomes={handleOutcomes} deleteRow={deleteRow} />
                { infoBtn.mode === 'view' ? null: <div className='div-btn-save'>
                    <button className='btn-save' type='button' onClick={() => { saveData(); handleInfoBtn('', '', ''); navToDashboard() }}>Save</button>
                </div>}
            </div>
        </div>
    )
}
