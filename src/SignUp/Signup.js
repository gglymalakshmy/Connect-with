import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Signup() {
  const [name,setname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const Submit=()=>{
   // console.log(name,email,password);
   axios.post("http://localhost:5000/signup",{name,email,password}).then((res)=>{
    console.log(res.data);
    
})
// axios.post("http://localhost:5000/testing",{name,email,password}).then((res)=>{
    //   console.log(res.data);

  }
  return (
    <div className='css'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{
          setname(e.target.value)
        }}/>
     
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
</Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
    <Button variant="primary" type="submit" onClick={Submit}>
        Signin
      </Button>
</div>
  )
}

export default Signup