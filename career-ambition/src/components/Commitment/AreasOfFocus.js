import './scss/areasOfFocus.scss'

export default function AreasOfFocus({info, category, deleteRow, handleCategory, addRowsCategory}) {
    return (
        <div className="areasOfFocus">
            <div className="title-commitments">Areas of Focus</div>
            <table className="table-commitments">
                <thead>
                    <tr>
                        <th className='table-category'>Category</th>
                        <th className='table-btns'></th>
                    </tr>
                </thead>
                <tbody>
                    {info.areasOfFocus.length !== 0 ? (info.areasOfFocus.map((elem, index)=> {
                        let keyName = 'row-category-' + index
                        let keyBtnCategory = 'btn-category-' + index
                        return (<tr key={keyName}>
                            <td>{elem}</td>
                            <td ><button className='btn-delete' type='button' key={keyBtnCategory} onClick={()=> deleteRow(keyBtnCategory, 'areasOfFocus')}>Delete</button></td>
                        </tr>)}
                    )): null}
                    <tr>
                        <td><input type='text' className='input-table' onChange={(e) => handleCategory(e.target.value)} value={category}/></td>
                        <td><button className='btn-add' type='button' onClick={()=>{addRowsCategory(category)}}>Add</button></td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}
