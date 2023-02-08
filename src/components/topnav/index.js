// import { VerifiedUser } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {
  // console.log(user.email);
  const {user} = useSelector(state=>state)
  const navigate = useNavigate();
  return (
    <div className='topnav'>
      <h1 onClick={()=>navigate("/")}>LOGO</h1>
      {user?<div> {user.email}</div >:<div onClick={()=>navigate("/login")}>Login</div>}
    </div>
  )
}

export default TopNavbar
