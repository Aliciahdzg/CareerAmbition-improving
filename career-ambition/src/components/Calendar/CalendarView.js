//import 'antd/dist/antd.css';
import './Calendar.scss'
//import { Calendar } from 'antd';
//import {monthCellRender} from './Algo'
import Aside from "../Aside/Aside";
const CalendarView = () =>{
    return(
        <div>
            <Aside />
            <h1>SOY EL CALENDARIO</h1>
            {/*<Calendar  monthCellRender={monthCellRender} className="cal"/>*/}
        </div>
    )
}
export default CalendarView;