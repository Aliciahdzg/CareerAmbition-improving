import './scss/plannedPractices.scss'

export default function PlannedPractices({ info, action, frecuency, deleteRow, handleActions, handleFrecuency, addRowsAction }) {
    return (
        <div className="plannedPractices">
            <div className="title-commitments">Planned Practices</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th className='table-action'>Action/Practice/Habit</th>
                        <th className='table-frecuency'>Frecuency</th>
                        <th className='table-btns'></th>
                    </tr>
                </thead>
                <tbody>
                    {info.plannedPractices.length !== 0 ? (info.plannedPractices.map((elem, index) => {
                        let keyName = 'row-actions-' + index
                        let keyBtnActions = 'btn-actions-' + index
                        return (<tr key={keyName}>
                            <td>{elem.action}</td>
                            <td>{elem.frecuency}</td>
                            <td ><button className='btn-delete' type='button' key={keyBtnActions} onClick={() => deleteRow(keyBtnActions, 'plannedPractices')}>Delete</button></td>
                        </tr>)
                    }
                    )) : null}
                    <tr>
                        <td><input type='text' onChange={(e) => handleActions(e.target.value)} value={action} /></td>
                        <td>
                            <select name="frecuency" onChange={(e) => handleFrecuency(e.target.value)} value={frecuency}>
                                <option value="" disabled>Choose one</option>
                                <option value="Daily">Daily</option>
                                <option value="Twice a week">Twice a week</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Not sure">Not Sure</option>
                            </select>
                        </td>
                        <td><button className='btn-add' type='button' onClick={() => { addRowsAction(action, frecuency) }}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}