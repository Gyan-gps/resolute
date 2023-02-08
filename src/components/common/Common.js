import React from 'react'

const Common = ({student,handleChange,handleSubmit,text}) => {
  return (
    <div>
        <input type="text" name='firstName' placeholder='First Name' value={student.firstName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='middleName' placeholder='' value={student.middleName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='lastName' placeholder='' value={student.lastName} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='class' placeholder='' value={student.class} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='division' placeholder='' value={student.division} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='rollNumber' placeholder='' value={student.rollNumber} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='address1' placeholder='' value={student.address1} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='address2' placeholder='' value={student.address2} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='landmark' placeholder='' value={student.landmark} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='city' placeholder='' value={student.city} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='pincode' placeholder='' value={student.pincode} onChange={(e)=>handleChange?handleChange(e):""} /> <br/>
        {text&&<button onClick={handleSubmit}>{text}</button>}
      </div>
  )
}

export default Common
