import React, { useRef } from "react";
import { AuthContext } from "../common/authContext/authcontext";
import { useContext, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import { Button, Card, Input, Label, Toggle, Wrapper } from "./Auth.styles";

const Auth = () => {
    const auth = useContext(AuthContext)
    const url = 'http://localhost:8000/api/auth'

    const [signup, setSignUp] = useState(false)
    // const [regUserValues, setRegUserValues] = useState({})
    // const [loggedInUserValues, setLoggedInUserValues] = useState({})
    const nameRef=useRef('');
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const [nameState, setName] = useState('');
    const [emailState, setEmail] = useState('');
    const [passwordState, setPasswordState] = useState('')
    const navigate = useNavigate()

    console.log("authLogin", auth.isLoggedIn)
  const submitHandler = async(event) => {
    event.preventDefault(); // Prevents default form submission
    console.log("Form submitted", nameRef.current, emailRef.current, passwordRef.current);
    if(signup){
try{
const res = await axios.post(`${url}/signup`,{name : nameRef.current, email:emailRef.current, password: passwordRef.current, role: "user"})
 auth.login(res.data.userId, res.data.token, "user")
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
        auth.login(res.data.userId, res.data.token, res.data.role);
        if(res.data.role==="admin"){
navigate('/adminDashboard')
        }
        else if(res.data.role==="user"){
navigate('/userDashboard')
        }
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
    <Wrapper>
      <Card>
        <Toggle>
          <button
            onClick={() => setSignUp(false)}
            className={!signup ? "active" : ""}
          >
            Sign In
          </button>
          <button
            onClick={() => setSignUp(true)}
            className={signup ? "active" : ""}
          >
            Sign Up
          </button>
        </Toggle>

        <form onSubmit={submitHandler}>
          {signup && (
            <>
              <Label>Name</Label>
              <Input
                onChange={handleChange}
                value={nameState}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </>
          )}
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            value={emailState}
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <Label>Password</Label>
          <Input
            onChange={handleChange}
            value={passwordState}
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <Button type="submit">{signup ? "Sign Up" : "Sign In"}</Button>
        </form>
      </Card>
    </Wrapper>
  );

};

export default Auth;
