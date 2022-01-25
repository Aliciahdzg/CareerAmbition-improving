import 'antd/dist/antd.css';
import './Calendar.scss'
import { Calendar } from 'antd';
import {dateCellRender,monthCellRender} from './Algo'
import Aside from "../Aside/Aside";
const CalendarView = () =>{
    return(
        <div>
            <Aside />
            <h1 className='title-calendar'>CALENDAR</h1>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} className="cal"/>
        </div>
    )
}
export default CalendarView;