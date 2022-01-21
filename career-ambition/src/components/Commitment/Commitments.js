import React, { useState } from 'react';
import './scss/commitments.scss'
import ActionPlan from './ActionPlan'
import Aside from '../Aside/Aside';
import AreasOfFocus from './AreasOfFocus';
import PlannedPractices from './PlannedPractices';
import Accountability from './Accountability';
import DeliberatePractice from './DeliberatePractice';

export default function Commitments() {
    let [info, setInfo] = useState({
        period: '',
        areasOfFocus: [],
        actionPlan: [],
        plannedPractices: [],
        accountability: [],
        deliberatePractice: []
    })

    let [smartGoal, setSmartGoal] = useState('')
    let [dateSmartGoal, setDateSmartGoal] = useState('')

    const addRowsSmartGoal = (goal, date) => {
        if (goal !== '' && date !== ''){
           setInfo({ ...info, actionPlan: [...info.actionPlan, { smartGoal: goal, dateGoal: date }] })
            setSmartGoal('')
            setDateSmartGoal('') 
        } else{
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
        if (categ !== ''){
           setInfo({ ...info, areasOfFocus: [...info.areasOfFocus, categ] })
           setCategory('')
        } else{
            alert('Please, fill all the blank spaces')
        }
        
    }

    const handleCategory = (categ) => {
        setCategory(categ)
    }

    let [action, setAction] = useState('')
    let [frecuency, setFrecuency] = useState('')

    const addRowsAction = (actions, frec) => {
        if (actions !== '' && frec !== ''){
           setInfo({ ...info, plannedPractices: [...info.plannedPractices, { action: actions, frecuency: frec }] })
            setAction('')
            setFrecuency('') 
        } else{
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
        if (mentors !== '' && whens !== '' && vias !== ''){
           setInfo({ ...info, accountability: [...info.accountability, { mentor: mentors, when: whens, via: vias }] })
            setMentor('')
            setWhen('') 
            setVia('') 
        } else{
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
        if (practices !== '' && dates !== '' && outcome !== ''){
           setInfo({ ...info, deliberatePractice: [...info.deliberatePractice, { practice: practices, date: dates, outcome: outcome }] })
            setPractice('')
            setDate('') 
            setOutcomes('') 
        } else{
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
        //console.log(id)
        //console.log(info)
        //console.log(info[section])
    }

    const saveData = () => {
        console.log(info)
    }

    return (
        <div className='body-commitments'>
            <Aside />
            <div className='container-commitments'>
                <h1 className='h1-commitments'>Period {info.period}</h1>
                <AreasOfFocus info={info} category={category} addRowsCategory={addRowsCategory} handleCategory={handleCategory} deleteRow={deleteRow} />
                <ActionPlan info={info} smartGoal={smartGoal} dateSmartGoal={dateSmartGoal} addRowsSmartGoal={addRowsSmartGoal} handleSmartGoal={handleSmartGoal} handleDateSmartGoal={handleDateSmartGoal} deleteRow={deleteRow} />
                <PlannedPractices info={info} action={action} frecuency={frecuency} addRowsAction={addRowsAction} handleActions={handleActions} handleFrecuency={handleFrecuency} deleteRow={deleteRow}/>
                <Accountability info={info} mentor={mentor} when={when} via={via} addRowsMentor={addRowsMentor} handleMentor={handleMentor} handleWhen={handleWhen} handleVia={handleVia} deleteRow={deleteRow}/>
                <DeliberatePractice info={info} practice={practice} date={date} outcomes={outcomes} addRowsPractice={addRowsPractice} handlePractice={handlePractice} handleDate={handleDate} handleOutcomes={handleOutcomes} deleteRow={deleteRow}/>
                <div className='div-btn-save'>
                    <button className='btn-save' type='button' onClick={()=>{saveData()}}>Save</button>
                </div>
            </div>
        </div>
    )
}
