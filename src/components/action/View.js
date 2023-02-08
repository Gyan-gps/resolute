import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebaseInitisize';
import Common from '../common/Common'

const View = () => {
    const [student,setStudent] = useState("");
    const {id} = useParams();

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

  return (
    <div>
      <h3>View Page</h3>
      {student&&<Common student={student}/>}
    </div>
  )
}

export default View
