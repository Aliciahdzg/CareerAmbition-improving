import React from 'react';

import { Icon } from '@iconify/react';

import './mainGoals.scss';

const MainGoals = ({elem}) => {

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
         <tr>
             <td>Q1</td>
             {elem.period === "Q1" ? (
                 <>
                    <td>{elem.mainGoal}</td>
                    <td></td>
                 </>
             ) : (
                <>
                   <td></td>
                   <td></td>
                </>
             )}
             <td>
                 <button>
                     <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
                 </button>
                 <button>
                  <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
                 </button>
              
             </td>
         </tr>
         <tr>
             <td>Q2</td>
             {elem.period === "Q2" ? (
                 <>
                    <td>{elem.mainGoal}</td>
                    <td></td>
                 </>
             ) : (
                <>
                   <td></td>
                   <td></td>
                </>
             )}
             <td>
                <button>
                     <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
                 </button>
                 <button>
                     <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
                 </button>
             </td>
         </tr>
         <tr>
             <td>Q3</td>
             {elem.period === "Q3" ? (
                 <>
                    <td>{elem.mainGoal}</td>
                    <td></td>
                 </>
             ) : (
                <>
                   <td></td>
                   <td></td>
                </>
             )}
             <td>
                 <button>
                     <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
                 </button>
                 <button>
                     <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
                 </button>
             </td>
         </tr>
         <tr>
             <td>Q4</td>
             {elem.period === "Q4" ? (
                 <>
                    <td>{elem.mainGoal}</td>
                    <td></td>
                 </>
             ) : (
                <>
                   <td></td>
                   <td></td>
                </>
             )}
             <td>
                 <button>
                     <Icon icon="icomoon-free:eye-plus" color="#03588c" height="20" />
                 </button>
                 <button>
                     <Icon icon="mdi-light:pencil" color="#03588c" height="20" />
                 </button>
             </td>
         </tr>
      </tbody>
  </table>
  </>)
};

export default MainGoals;
