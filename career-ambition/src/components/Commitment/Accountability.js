import './scss/accountability.scss'

export default function Accountability({info, mentor, when, via, deleteRow, handleMentor, handleWhen, handleVia, addRowsMentor}) {
    return (
        <div className="accountability">
            <div className="title-commitments">Accountability</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th className='table-mentor'>The person I will be accountable to</th>
                        <th className='table-contactFrec'>I will contact them (when/ Frequency)</th>
                        <th className='table-via'>Vía/How</th>
                        <th className='table-btns'></th>
                    </tr>
                </thead>
                <tbody>
                    {info.accountability.length !== 0 ? (info.accountability.map((elem, index)=> {
                        let keyName = 'row-mentor-' + index
                        let keyBtnMentor = 'btn-mentor-' + index
                        return (<tr key={keyName}>
                            <td>{elem.person}</td>
                            <td>{elem.frecuency}</td>
                            <td>{elem.vía}</td>
                            <td ><button className='btn-delete' type='button' key={keyBtnMentor} onClick={()=> deleteRow(keyBtnMentor, 'accountability')}>Delete</button></td>
                        </tr>)}
                    )): null}
                    <tr>
                        <td><input type='text' className='input-table' onChange={(e) => handleMentor(e.target.value)} value={mentor}/></td>
                        <td>
                            <select name="when"  className='input-table' onChange={(e) => handleWhen(e.target.value)} value={when}>
                                <option value="" disabled>Choose one</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        </td>
                        <td><input type='text' className='input-table' onChange={(e) => handleVia(e.target.value)} value={via}/></td>
                        <td><button className='btn-add' type='button' onClick={()=>{addRowsMentor(mentor, when, via)}}>Add</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}