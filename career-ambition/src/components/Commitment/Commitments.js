import React, {useState} from 'react';
import './scss/commitments.scss'
import ActionPlan from './ActionPlan'

export default function Commitments() {
    let [info, setInfo]=useState({
        period: '',
        areasOfFocus:[],
        actionPlan:[],
        plannedPractices:[],
        accountability:[],
        deliberatePractice:[]
    })

    let [smartGoal, setSmartGoal] = useState('')
    let [dateSmartGoal, setDateSmartGoal] = useState('')

    const addRowsSmartGoal= (goal, date) => {
        setInfo({...info, actionPlan:[...info.actionPlan, {smartGoal: goal, dateGoal: date}]})
        setSmartGoal('')
        setDateSmartGoal('')
    }

    const handleSmartGoal = (goal) => {
        setSmartGoal(goal)
    }

    const handleDateSmartGoal = (date) => {
        setDateSmartGoal(date)
    }

    const deleteRow = (keyname, section) => {
        let id = keyname.substring(10)
        let newArr = []
        for (let i=0; i< info[section].length;i++){
            if (Number(id) !== i){
                newArr.push(info[section][i])
            }
        }
        setInfo({...info, [section]:newArr})
        //console.log(id)
        //console.log(info)
        //console.log(info[section])
    }
    
    return (
        <div>
            <h1 className='h1-commitments'>Period {info.period}</h1>
            <ActionPlan info={info} smartGoal={smartGoal} dateSmartGoal={dateSmartGoal} addRowsSmartGoal={addRowsSmartGoal} handleSmartGoal={handleSmartGoal} handleDateSmartGoal={handleDateSmartGoal} deleteRow={deleteRow}/>
        </div>
    )
}
