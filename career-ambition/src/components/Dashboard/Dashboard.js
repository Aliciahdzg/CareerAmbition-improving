import React, { useState, useEffect } from 'react'

import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import Aside from '../Aside/Aside';

import './dashboard.scss';

const Dashboard = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
    const renderUsers = () => {
        try {
          onSnapshot(query(collection(db, 'users')), (querySnapshot) => {
              const documents = [];
              querySnapshot.forEach((doc) => {
                  documents.push({ id: doc.id, ...doc.data()});
              });
              setUsers(documents);
          });
        } catch (error) {
            console.log(error);
        }
    };
    return renderUsers();
   }, []);

    return (
        <div>
            <Aside />
            
              {users.map((user) => (
                  <div className='personal-information'key={user.id }>
                    <h3>{user.name}</h3>
                     <p>{user.email}</p>
                    <div className='career-ambition'>
                       <h2>Career Ambition</h2>
                       <div>
                          Career Abition text
                       </div>
                    </div>
                  </div>)
              )}
           
            
            
        </div>
    )
}

export default Dashboard;
