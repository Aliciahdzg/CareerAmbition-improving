import React, { useState } from 'react';
import './scss/commitments.scss'
import ActionPlan from './ActionPlan'
import Aside from '../Aside/Aside';
import AreasOfFocus from './AreasOfFocus';
import PlannedPractices from './PlannedPractices';
import Accountability from './Accountability';
import DeliberatePractice from './DeliberatePractice';

export default function Commitments({ userName }) {
    let [info, setInfo] = useState({
        name: '',
        email: userName,
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
        if (goal !== '' && date !== '') {
            setInfo({ ...info, actionPlans: [...info.actionPlans, { smartGoal: goal, byWhen: date }] })
            setSmartGoal('')
            setDateSmartGoal('')
        } else {
            alert('Please, fill all the blank spaces')
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
            alert('Please, fill all the blank spaces')
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
            alert('Please, fill all the blank spaces')
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
        if (mentors !== '' && whens !== '' && vias !== '') {
            setInfo({ ...info, accountability: [...info.accountability, { person: mentors, frecuency: whens, vía: vias }] })
            setMentor('')
            setWhen('')
            setVia('')
        } else {
            alert('Please, fill all the blank spaces')
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
            alert('Please, fill all the blank spaces')
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
        setInfo({ ...info, period: periods })
    }


    const handleMainGoal = (maingoals) => {
        setInfo({ ...info, mainGoal: maingoals })
    }


    const saveData = () => {
        console.log(userName)
        console.log(info)

    }
    return (
        <div className='body-commitments'>
            <Aside />
            <div className='container-commitments'>
                <div className='div-period'>
                    <h1 className='h1-commitments'>Period</h1>
                    <select name="frecuency" className='period-select' onChange={(e) => handlePeriod(e.target.value)} value={info.period}>
                        <option value="" disabled>Q-</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                    </select>
                </div>
                <div className='div-inputs'>
                    <label htmlFor='mainGoal' className='label-commitments'>My main goal is: </label>
                    <input type='text' onChange={(e) => handleMainGoal(e.target.value)} value={info.mainGoal} />
                </div>
                <AreasOfFocus info={info} category={category} addRowsCategory={addRowsCategory} handleCategory={handleCategory} deleteRow={deleteRow} />
                <ActionPlan info={info} smartGoal={smartGoal} dateSmartGoal={dateSmartGoal} addRowsSmartGoal={addRowsSmartGoal} handleSmartGoal={handleSmartGoal} handleDateSmartGoal={handleDateSmartGoal} deleteRow={deleteRow} />
                <PlannedPractices info={info} action={action} frecuency={frecuency} addRowsAction={addRowsAction} handleActions={handleActions} handleFrecuency={handleFrecuency} deleteRow={deleteRow} />
                <Accountability info={info} mentor={mentor} when={when} via={via} addRowsMentor={addRowsMentor} handleMentor={handleMentor} handleWhen={handleWhen} handleVia={handleVia} deleteRow={deleteRow} />
                <DeliberatePractice info={info} practice={practice} date={date} outcomes={outcomes} addRowsPractice={addRowsPractice} handlePractice={handlePractice} handleDate={handleDate} handleOutcomes={handleOutcomes} deleteRow={deleteRow} />
                <div className='div-btn-save'>
                    <button className='btn-save' type='button' onClick={() => { saveData() }}>Save</button>
                </div>
            </div>
        </div>
    )
}
