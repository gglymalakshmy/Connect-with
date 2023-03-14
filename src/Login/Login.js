import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Login() {
  useEffect(() => {
    const user=localStorage.getItem("user")
    if(user)
    navigate('/home')
  }, [])
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const Submit=()=>{
    if (!email||!password)
    {
      alert("Enter the fields......")
    }
    else{
    // console.log(name,email,password);
    axios.post("http://localhost:5000/login",{email,password}).then((res)=>{
     console.log(res.data.isError);
     let error=res.data.isError
     if(error)
     {
      alert("error")
     }
     else{
      localStorage.setItem("user",JSON.stringify(res.data))
     navigate("/home")
     }
     
 })
 
}
  }
  return (
    <div className='css'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"onChange={(e)=>{
          setEmail(e.target.value)
        }} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
        }} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
  </Form>
  <Button variant="primary" type="submit" onClick={Submit}>
    Login
    </Button>
  <Link to='/signin'>Signin</Link>
    </div>

  )
}

export default Login