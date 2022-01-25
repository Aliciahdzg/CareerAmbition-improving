import './aside.scss'
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { signOff, auth } from "../../firebase/firebase-config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Aside = ({handleInfoBtn}) => {

  const [setError] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    try {
      Swal.fire({
        title: "Do you want to log out?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5EBFA4",
        cancelButtonColor: "#4397D2",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        width: "45vh",
        heightAuto: "true",
        position: "center",
      }).then((result) => {
        if (result.isConfirmed) {
          signOff(auth);
          navigate("/");
        }
      });
    } catch (error) {
      setError("Error server");
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
                        <div className="userAvatar">
                    <Icon icon="carbon:user-avatar" className="avatar" />
                    {/* <Icon icon="akar-icons:circle-plus-fill" color="#5ebfa4" width="30" height="30" /> */}
                    </div>
                    <div className="divHover">
                    <Icon icon="ic:outline-dashboard-customize" className="dashboard"
                    onClick={() => {dashboard() ; handleInfoBtn('', '', '')}}/> 
                    <p>Dashboard</p>
                    </div>
                    <div className="divHover">
                    <Icon icon="bx:bxs-calendar" className="calendar"
                    onClick={() => {calendar() ; handleInfoBtn('', '', '')}}/>
                    <p>Calendar</p>
                    </div>
                    <div className="divHover">
                    <Icon icon="bi:list-check" className="edit"
                    onClick={() => {editionView() ; handleInfoBtn('', '', '')}} />
                    <p>Commitments</p>
                    </div>
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
