import React from 'react';
import { useNavigate } from "react-router";
import { deleteDesiredDoc } from '../../firebase/firebase-config';

import TimeLine from './TimeLine'

import { Icon } from '@iconify/react';

import './mainGoals.scss';

const MainGoals = ({info, handleInfoBtn}) => {
  const navigate = useNavigate();
  const navToCommitment = () => {
    navigate("/commitment")
  }

  const list = [];
  info.forEach((elem) => {
      list.push(
      <tr>
        <td>{elem.period + elem.year }</td>
        <td>{elem.mainGoal} <TimeLine /></td>
        <td>En proceso</td>
        <td>
            <button onClick={() => {handleInfoBtn(elem.period, elem.year, 'view');  navToCommitment()}}>
                <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
            </button>
            <button onClick={() => {handleInfoBtn(elem.period, elem.year, 'edit'); navToCommitment()}}>
             <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
            </button>
            <button onClick={() => deleteDesiredDoc(elem.id)} >
                <Icon icon="ic:twotone-delete-forever" color="#03588C" height="25" />
            </button>
        </td>
    </tr>
   )
})
  return (<>

  <table className='main-goals'>
      <thead>
         <tr>
             <th className='period'>Period</th>
             <th>Main Goal</th>
             <th className='status'>Status</th>
             <th className='action'>Action</th>
         </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
  </table>
  </>)
};

export default MainGoals;
