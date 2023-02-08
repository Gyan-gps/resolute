import React from 'react'

const Common = ({student,handleChange,handleSubmit,text}) => {
  return (
    <div>
        <input type="text" name='firstName' placeholder='First Name' value={student.firstName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='middleName' placeholder='Middle Name' value={student.middleName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='lastName' placeholder='Last Name' value={student.lastName} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='class' placeholder='Class' value={student.class} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='division' placeholder='Division' value={student.division} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='rollNumber' placeholder='Enter roll number in digit' value={student.rollNumber} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='address1' placeholder='Address Line 1' value={student.address1} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='address2' placeholder='Address Line 2' value={student.address2} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='landmark' placeholder='Landmerk' value={student.landmark} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='city' placeholder='City Name' value={student.city} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='pincode' placeholder='Pin Code' value={student.pincode} onChange={(e)=>handleChange?handleChange(e):""} /> <br/>
        {text&&<button onClick={handleSubmit}>{text}</button>}
      </div>
  )
}

export default Common
