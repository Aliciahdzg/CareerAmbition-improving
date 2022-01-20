import React, { useState, useEffect } from 'react'

import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import Aside from '../Aside/Aside'

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
            <div className='personal-information'>
              {users.map((user) => (<>
                 <h2 key={user.id }>{user.name}</h2>
                 <p key={user.id}>{user.email}</p>
                 </>)
              )}
            </div>
            
        </div>
    )
}

export default Dashboard
