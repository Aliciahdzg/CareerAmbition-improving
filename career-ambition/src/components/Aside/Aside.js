import './aside.scss'
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { signOff, auth } from "../../firebase/firebase-config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Aside = () => {

  const [setError] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    try {
      Swal.fire({
        title: "¿Desea Cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#c93c00",
        cancelButtonColor: "#e7aa2b",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        width: "50vh",
        heightAuto: "true",
        position: "center",
      }).then((result) => {
        if (result.isConfirmed) {
          signOff(auth);
          navigate("/");
        }
      });
    } catch (error) {
      setError("Error del servidor");
      console.log(error);
    }
  };

  const dashboard = () => {
    navigate("/dashboard")
  }
  const calendar = () => {
    navigate("/calendar")
  }
  const editionView = () => {
    navigate("/commitment")
  }
    return(
        <div>
                <aside className="aside">
                    <div className="icons">
                    <Icon icon="carbon:user-avatar" className="avatar" />
                    <Icon icon="ic:outline-dashboard-customize" className="dashboard"
                    onClick={dashboard}/>
                    <p>Dashboard</p>
                    <Icon icon="bx:bxs-calendar" className="calendar"
                    onClick={calendar}/>
                    <p>Calendar</p>
                    <Icon icon="bi:list-check" className="edit"
                    onClick={editionView} />
                    <p>Commitments</p>
                    </div>
                    <div className="logout">
                    <Icon icon="fe:logout"  onClick={() => { handleSignOut(auth) }}/>
                    <p>Log out</p>
                    </div>
                    
                    
                </aside>
        </div>
    )
}

export default Aside;
