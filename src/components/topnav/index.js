// import { VerifiedUser } from '@mui/icons-material'
import React from 'react'

const TopNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.email);
  return (
    <div className='topnav'>
      <h1>LOGO</h1>
      <div> email</div>
    </div>
  )
}

export default TopNavbar
