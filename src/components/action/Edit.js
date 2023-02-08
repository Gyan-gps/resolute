import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../config/firebaseInitisize';
import { EDIT } from '../../redux/action';
import Common from '../common/Common';

const Edit = () => {
    const [student,setStudent] = useState("");
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(id)

    useEffect(()=>{
        const getData = async()=>{
            // setStudent(doc(db,"studends",id))
            try {
                const docRef = doc(db, "students", id);
                const docSnap = await getDoc(docRef);
                setStudent(docSnap.data())
                // console.log({...docSnap.data()},docSnap);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setStudent({...student,[name]:value})
      }
    
      const handleSubmit = async()=>{
        // console.log(student);
        try {

          // const citiesRef = collection(db, "students",id);
    
          await setDoc(doc(db,"students",id), {...student})

          dispatch({
            type:EDIT,
            payload:student
          })
          navigate("/");
    
        } catch (error) {
          console.log(error);
        }
      } 

  return (
    <div>
      <h3>Edit Page</h3>
      {student&&<Common student={student} handleChange={handleChange} handleSubmit={handleSubmit} text="Edit"  />}
    </div>
  )
}

export default Edit
