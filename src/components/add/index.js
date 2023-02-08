import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebaseInitisize';
import { ADD_STUDENT, GET_USER } from '../../redux/action';
import Common from '../common/Common';

const AddStudent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector(state=>state)

  const [student,setStudent] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    class:"",
    division:"",
    rollNumber:"",
    address1:"",
    address2:"",
    landmark:"",
    city:"",
    pincode:""
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setStudent({...student,[name]:value})
  }

  const handleSubmit = async()=>{
    // console.log(student);
    try {
      const citiesRef = collection(db, "students");

      await setDoc(doc(citiesRef), {...student,uid:user.uid})
      .then(()=>{
        dispatch({
          type:ADD_STUDENT,
          payload:{...student,uid:user.uid}
        })
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(()=>{
    const getData = async ()=>{

    }
    getData();
  },[])
  return (
    <div>
      <h3>Add Student</h3>
      <Common handleSubmit={handleSubmit} student={student} handleChange={handleChange} text="ADD"/>
    </div>
  )
}

export default AddStudent
