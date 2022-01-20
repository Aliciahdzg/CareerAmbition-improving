import React, {useState} from 'react';

export default function Commitments() {
    let [renglon, setRenglon]=useState([])
    let [smartGoal, setSmartGoal] = useState('')
    let [dateSmartGoal, setDateSmartGoal] = useState('')

    const addRows= (goal, date) => {
        setRenglon([...renglon, {smartGoal: goal, dateGoal: date}])
        setSmartGoal('')
        setDateSmartGoal('')
    }

    const handleSmartGoal = (goal) => {
        setSmartGoal(goal)
    }

    const handleDateSmartGoal = (date) => {
        setDateSmartGoal(date)
    }

    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>SMART Goal</th>
                        <th>By When</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renglon.length !== 0 ? (renglon.map((elem)=> 
                        <tr>
                            <td>{elem.smartGoal}</td>
                            <td>{elem.dateGoal}</td>
                            <td><button type='button'>x</button></td>
                        </tr>
                    )): null}
                    <tr>
                        <td><input type='text' onChange={(e) => handleSmartGoal(e.target.value)} value={smartGoal}/></td>
                        <td><input type='date' onChange={(e) => handleDateSmartGoal(e.target.value)} value={dateSmartGoal}/></td>
                        <td><button type='button' onClick={()=>{addRows(smartGoal,dateSmartGoal)}}>+</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}
