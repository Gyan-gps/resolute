import React from 'react'

const Common = ({student,handleChange,handleSubmit,text}) => {
  return (
    <div>
        <input type="text" name='firstName' value={student.firstName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='middleName' value={student.middleName} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='lastName' value={student.lastName} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='class' value={student.class} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='division' value={student.division} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='rollNumber' value={student.rollNumber} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='address1' value={student.address1} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='address2' value={student.address2} onChange={(e)=>handleChange?handleChange(e):""} /><br/>
        <input type="text" name='landmark' value={student.landmark} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='city' value={student.city} onChange={(e)=>handleChange?handleChange(e):""} />
        <input type="text" name='pincode' value={student.pincode} onChange={(e)=>handleChange?handleChange(e):""} /> <br/>
        {text&&<button onClick={handleSubmit}>{text}</button>}
      </div>
  )
}

export default Common
