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
    const [nameState, setName] = useState('');
    const [emailState, setEmail] = useState('');
    const [passwordState, setPasswordState] = useState('')

  const submitHandler = async(event) => {
    event.preventDefault(); // Prevents default form submission
    console.log("Form submitted", nameRef.current, emailRef.current, passwordRef.current);
    if(signup){
try{
const res = await axios.post(`${url}/signup`,{name : nameRef.current, email:emailRef.current, password: passwordRef.current})

alert(res.data.message)
}

catch(err){
console.log("post signup err", err)
alert(err.response.data.error)
}
    }
    else{
      try{
        const res = await axios.post(`${url}/login`,{email:emailRef.current, password: passwordRef.current})
        console.log("check res post", res)
        alert(res.data.message)
        }catch(err){
        console.log("post signup err", err)
        alert(err.response.data.error)
        }
    }
    nameRef.current=''
emailRef.current=''
passwordRef.current=''
setName('');
setEmail('');
setPasswordState('')
  };

  const handleChange=(e)=>{
const {name, value}=e.target
console.log("name inside handleChange", name)
switch(name){
    case 'name':
        nameRef.current=value
        setName(value)
        break
    case 'email':
        emailRef.current=value
        setEmail(value)
        break
    case 'password':
        passwordRef.current=value
        setPasswordState(value)
        break
    default:
        break
}
  }
console.log("check values", nameState, emailState, passwordState)
  return (
    <>
    <Link onClick={()=>setSignUp(true)}>Sign up</Link> or <Link onClick={()=>setSignUp(false)}>Sign in</Link>
    <form onSubmit={submitHandler}>
      {signup && <><label>Name:</label>
      <input onChange={handleChange} value={nameState} type="text" name="name" /></>}

      <label>Email:</label>
      <input onChange={handleChange} value={emailState} type="email" name="email" />

      <label>Password:</label>
      <input onChange={handleChange} value={passwordState} type="password" name="password" />

      <button type="submit">{signup ? "Sign up" : "Sign in"}</button>
    </form>
    </>
  );
};

export default Auth;
