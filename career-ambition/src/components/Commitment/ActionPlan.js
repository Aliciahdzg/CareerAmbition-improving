export default function ActionPlan({info, smartGoal, dateSmartGoal, deleteRow, handleSmartGoal, handleDateSmartGoal, addRowsSmartGoal}) {
    return (
        <div>
            <div className="title-commitments">Action Plan</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th>SMART Goal</th>
                        <th>By When</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {info.actionPlan.length !== 0 ? (info.actionPlan.map((elem, index)=> {
                        let keyName = 'row-smart-' + index
                        let keyBtnSmart = 'btn-smart-' + index
                        return (<tr key={keyName}>
                            <td>{elem.smartGoal}</td>
                            <td>{elem.dateGoal}</td>
                            <td class='table-btns'><button type='button' key={keyBtnSmart} onClick={()=> deleteRow(keyBtnSmart, 'actionPlan')}>Delete</button></td>
                        </tr>)}
                    )): null}
                    <tr>
                        <td><input type='text' onChange={(e) => handleSmartGoal(e.target.value)} value={smartGoal}/></td>
                        <td><input type='date' onChange={(e) => handleDateSmartGoal(e.target.value)} value={dateSmartGoal}/></td>
                        <td><button type='button' onClick={()=>{addRowsSmartGoal(smartGoal,dateSmartGoal)}}>Add</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}
