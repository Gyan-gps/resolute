// import { VerifiedUser } from '@mui/icons-material'
import React from 'react'

const TopNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='topnav'>
      <h1>LOGO</h1>
      <div> {user&user.email}</div>
    </div>
  )
}

export default TopNavbar
