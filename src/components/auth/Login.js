import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../config/firebaseInitisize';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';
import { SIGNUP } from '../../redux/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const handleSubmit = () =>{
    // console.log(user)
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async(userCredential) => {
      // Signed in 
      const data = userCredential.user;
      // console.log(user)
      localStorage.setItem("user",JSON.stringify({name:user.name,uid:data.uid,email:user.email}))
      dispatch({
        type:SIGNUP,
        payload:{name:user.name,uid:data.uid,email:user.email}
      })
      try {
        const citiesRef = collection(db, "users");
  
        await setDoc(doc(citiesRef), {...user,uid:data.uid})
        navigate("/");
        // console.log(x);
      } catch (error) {
        console.log(error);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // ..
    });

  }

  return (
    <div>
      <h3>Login</h3>
      <div>
        <input type="text" name='name' value={user.name} onChange={(e)=>handleChange(e)} placeholder='Enter Your Name' />
        <br/><input type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} placeholder='Enter Your Email' />
        <br/><input type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)} placeholder='Enter Your Password' />
        <br/>
        <button onClick={handleSubmit}>SignUp</button>
      </div>
    </div>
  )
}

export default Login
