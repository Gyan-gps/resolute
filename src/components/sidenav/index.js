import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebaseInitisize';

const SideNavbar = () => {
  const [text,setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const navigate = useNavigate()

  const handleLogout = ()=>{
    signOut(auth)
    .then(()=>{
      localStorage.clear();
      navigate("/login")
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='sidenav'>
      <div onClick={()=>setText("addstudent")} style={{backgroundColor:text==="addstudent"?"#F33823":""}}><Link to="/addstudent">Add Student</Link></div>
      <div onClick={()=>setText("")} style={{backgroundColor:text===""?"#F33823":""}}><Link to="/">Manage Student</Link></div>
        {
          user?<div style={{backgroundColor:text==="login"?"#F33823":""}} onClick={()=>handleLogout()} >Logout</div>:
          <div style={{backgroundColor:text==="login"?"#F33823":""}}><Link onClick={()=>setText("login")}  to="/login" >Login</Link>
        </div>
        }
    </div>
  )
}

export default SideNavbar
