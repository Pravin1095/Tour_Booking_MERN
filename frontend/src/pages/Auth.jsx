import React, { useRef } from "react";
import { AuthContext } from "../common/authContext/authcontext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Auth = () => {
    const auth = useContext(AuthContext)
    const url = 'http://localhost:8000/api/users'

    const [signup, setSignUp] = useState(false)
    // const [regUserValues, setRegUserValues] = useState({})
    // const [loggedInUserValues, setLoggedInUserValues] = useState({})
    const nameRef=useRef('');
    const emailRef=useRef('');
    const passwordRef=useRef('');

  const submitHandler = async(event) => {
    event.preventDefault(); // Prevents default form submission
    console.log("Form submitted", nameRef.current, emailRef.current, passwordRef.current);
    if(signup){
try{
const res = await axios.post(`${url}/signup`,{name : nameRef.current, email:emailRef.current, password: passwordRef.current})
console.log("check res post", res.message)
nameRef.current=''
emailRef.current=''
passwordRef.current=''
}catch(err){
console.log("post signup err", err)
}
    }
    else{
      try{
        const res = await axios.post(`${url}/login`,{email:emailRef.current, password: passwordRef.current})
        console.log("check res post", res.message)
        nameRef.current=''
        emailRef.current=''
        passwordRef.current=''
        }catch(err){
        console.log("post signup err", err)
        }
    }
  };

  const handleChange=(e)=>{
const {name, value}=e.target

switch(name){
    case 'name':
        nameRef.current=value
    case 'email':
        emailRef.current=value
    case 'password':
        passwordRef.current=value
    default:
        break
}
  }

  return (
    <>
    <Link onClick={()=>setSignUp(true)}>Sign up</Link> or <Link onClick={()=>setSignUp(false)}>Sign in</Link>
    <form onSubmit={submitHandler}>
      {signup && <><label>Name:</label>
      <input onChange={handleChange} value={nameRef.current} type="text" name="name" /></>}

      <label>Email:</label>
      <input onChange={handleChange} value={emailRef.current} type="email" name="email" />

      <label>Password:</label>
      <input onChange={handleChange} value={passwordRef.current} type="password" name="password" />

      <button type="submit">{signup ? "Sign up" : "Sign in"}</button>
    </form>
    </>
  );
};

export default Auth;
