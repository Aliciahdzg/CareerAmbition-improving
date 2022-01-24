import React from 'react';

import { Icon } from '@iconify/react';

import './mainGoals.scss';

const MainGoals = ({info, handleInfoBtn}) => {
  const list = [];
  info.forEach((elem) => {
      list.push(
      <tr>
        <td>{elem.period + elem.year }</td>
        <td>{elem.mainGoal}</td>
        <td>En proceso</td>
        <td>
            <button onClick={() => handleInfoBtn(elem.period, elem.year)}>
                <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
            </button>
            <button onClick={() => handleInfoBtn(elem.period, elem.year)}>
             <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
            </button>
        </td>
    </tr>
   )
})
  return (<>

  <table className='main-goals'>
      <thead>
         <tr>
             <th>Period</th>
             <th>Main Goal</th>
             <th>Status</th>
             <th>Action</th>
         </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
  </table>
  </>)
};

export default MainGoals;
