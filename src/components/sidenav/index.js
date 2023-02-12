import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebaseInitisize';
import { LOGOUT } from '../../redux/action';

const SideNavbar = () => {
  
  const {user} = useSelector(state=>state)
  
  const [text,setText] = useState(user?'':"login");
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    signOut(auth)
    .then(()=>{
      localStorage.clear();
      dispatch({
        type:LOGOUT,
      })
      navigate("/login")
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='sidenav'>
      <div onClick={()=>{
        setText("addstudent")
        navigate("/addstudent")
        }} style={{backgroundColor:text==="addstudent"?"#F33823":""}}>Add Student</div>
      <div onClick={()=>{
        setText("")
        navigate("/")
        }} style={{backgroundColor:text===""?"#F33823":""}}>Manage Student</div>
        {
          user?<div style={{backgroundColor:text==="login"?"#F33823":""}} onClick={()=>handleLogout()} >Logout</div>:
          <div style={{backgroundColor:text==="login"?"#F33823":""}}><Link onClick={()=>setText("login")}  to="/login" >Login</Link>
        </div>
        }
    </div>
  )
}

export default SideNavbar
