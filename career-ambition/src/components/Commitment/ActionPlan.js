import './scss/actionPlan.scss'

export default function ActionPlan({info, smartGoal, dateSmartGoal, deleteRow, handleSmartGoal, handleDateSmartGoal, addRowsSmartGoal}) {
    return (
        <div className="actionPlan">
            <div className="title-commitments">Action Plan</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th className='table-smartGoal'>SMART Goal</th>
                        <th className='table-byWhen'>By When</th>
                        <th className='table-btns'></th>
                    </tr>
                </thead>
                <tbody>
                    {info.actionPlan.length !== 0 ? (info.actionPlan.map((elem, index)=> {
                        let keyName = 'row-smart-' + index
                        let keyBtnSmart = 'btn-smart-' + index
                        return (<tr key={keyName}>
                            <td>{elem.smartGoal}</td>
                            <td>{elem.dateGoal}</td>
                            <td ><button className='btn-delete' type='button' key={keyBtnSmart} onClick={()=> deleteRow(keyBtnSmart, 'actionPlan')}>Delete</button></td>
                        </tr>)}
                    )): null}
                    <tr>
                        <td><input type='text' onChange={(e) => handleSmartGoal(e.target.value)} value={smartGoal}/></td>
                        <td><input type='date' onChange={(e) => handleDateSmartGoal(e.target.value)} value={dateSmartGoal}/></td>
                        <td><button className='btn-add' type='button' onClick={()=>{addRowsSmartGoal(smartGoal,dateSmartGoal)}}>Add</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}
