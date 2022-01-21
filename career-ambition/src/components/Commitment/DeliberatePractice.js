import './scss/deliberatePractice.scss'

export default function DeliberatePractice({info, practice, date, outcomes, deleteRow, handlePractice, handleDate, handleOutcomes, addRowsPractice}) {
    return (
        <div className="deliberatePractice">
            <div className="title-commitments">Deliberate Practice Log</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th className='table-practice'>Action/Practice/Habit</th>
                        <th className='table-date'>Date</th>
                        <th className='table-outcomes'>Outcomes</th>
                        <th className='table-btns'></th>
                    </tr>
                </thead>
                <tbody>
                    {info.deliberatePractice.length !== 0 ? (info.deliberatePractice.map((elem, index)=> {
                        let keyName = 'row-practice-' + index
                        let keyBtnPractice = 'btn-practice-' + index
                        return (<tr key={keyName}>
                            <td>{elem.action}</td>
                            <td>{elem.date}</td>
                            <td>{elem.outcomes}</td>
                            <td ><button className='btn-delete' type='button' key={keyBtnPractice} onClick={()=> deleteRow(keyBtnPractice, 'deliberatePractice')}>X</button></td>
                        </tr>)}
                    )): null}
                    <tr>
                        <td><input type='text' onChange={(e) => handlePractice(e.target.value)} value={practice}/></td>
                        <td><input type='date' onChange={(e) => handleDate(e.target.value)} value={date}/></td>
                        <td><input type='text' onChange={(e) => handleOutcomes(e.target.value)} value={outcomes}/></td>
                        <td><button className='btn-add' type='button' onClick={()=>{addRowsPractice(practice, date, outcomes)}}>Add</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}