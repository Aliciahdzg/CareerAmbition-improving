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
//import React, { useState } from 'react';
//import { signOff, auth } from "../../firebase/firebase-config";
//import Swal from "sweetalert2";
//import { useNavigate } from "react-router";


//const Dashboard = () => {
//  const [setError] = useState("");
//  const navigate = useNavigate();

//  const handleSignOut = () => {
//    try {
//      Swal.fire({
//        title: "¿Desea Cerrar sesión?",
//        icon: "question",
//        showCancelButton: true,
//        confirmButtonColor: "#c93c00",
//        cancelButtonColor: "#e7aa2b",
//        confirmButtonText: "Si",
//        cancelButtonText: "No",
//        width: "50vh",
//        heightAuto: "true",
//        position: "center",
//      }).then((result) => {
//        if (result.isConfirmed) {
//          signOff(auth);
//          navigate("/");
//        }
//      });
//    } catch (error) {
//      setError("Error del servidor");
//      console.log(error);
//    }
//  };


//  return (
//    <div>
//      <h1>estoy en dashboard</h1>
//      <button onClick={() => { handleSignOut(auth) }}>Cerrar Sesión</button>
//    </div>
//  );
//};

export default Dashboard;
