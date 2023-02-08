import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebaseInitisize';
import { SETDATA } from '../../redux/action';

const Student = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const {user,students} = useSelector(state=>state)
  // const [students,setStudents] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const getData =async ()=>{
      const q = query(collection(db, "students"), where("uid", "==", user.uid));

      const querySnapshot = await getDocs(q);
      // console.log(13,querySnapshot);
      let array = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(),doc.id);
        array.push({...doc.data(),id:doc.id})
      });
      dispatch({
        type:SETDATA,
        payload:array
      })
    }
    getData();
  },[])

  const handleView =async (id)=>{
    console.log(id);
    navigate("/view/"+id)
  }
  const handleEdit =async (id)=>{
    console.log(id);
    navigate("/edit/"+id)
  }
  const handleDelete =async (id)=>{
    console.log(id);
    await deleteDoc(doc(db,"students",id))

    // let bool = confirm("Are you sure you want to delete this item")
    // console.log(bool)
  }

  return (
    <div >
      <h3 className="heading">Manage Student</h3>
      <table>
        <thead>
          <tr>
          <td>Name</td>
          <td>Class</td>
          <td>Roll</td>
          <td>View/Edit/Delete</td>
          </tr>
        </thead>
        <tbody>
          {
            // console.log(students)
            students.map((student)=>{
              return <tr key={student.id}>
                <td>{student.firstName}</td>
              <td>{student.class}</td>
              <td>{student.rollNumber}</td>
              <td className='action'>
                <div onClick={()=>{handleView(student.id)}}>view</div>
                <div onClick={()=>{handleEdit(student.id)}}>edit</div>
                <div onClick={()=>{handleDelete(student.id)}}>delete</div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Student
