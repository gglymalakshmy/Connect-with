import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Home() {
  const [user,setUser]=useState('')
  const [email,setEmail]=useState('')
  const [fetchemail,setFetchemail]=useState([])
  const [_id,setId]=useState('')
  const navigate=useNavigate()

  // useEffect(() => {
  //   const user=localStorage.getItem("user")
  //  setUser(user)
  // }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/emails").then((res)=>{
    setFetchemail(res.data);
    console.log(res.data);
  })
    })
  
  const Logout=()=>{
    localStorage.removeItem("user")
    navigate('/login')
  }
  // const Deletion=(_id)=>{
  //  console.log(_id);
  //  axios.delete(`http://localhost:5000/deleteparams/${_id}`).then((res)=>{
  // })
  // }
  const update=()=>{
    axios.put("http://localhost:5000/updatemail",{email,_id}).then((res)=>{
      alert("Updated")
   })
   }
 //const user=localStorage.getItem("user")
  return (
    <div>
      <h2>Home</h2>
     {/* {email.map((val)=>(
        <h4 onClick={()=>{Deletion(val._id)}}>{val.email}</h4>
     ))} */}
        {fetchemail.map((val)=>(
        <h4 onClick={()=>{setId(val._id)
          alert("clicked")
        }}>{val.email}</h4>
     ))}
     <input onChange={(e)=>setEmail(e.target.value)}/>
     <button onClick={update}>update</button>
      {user?<Button variant="primary" type="submit" onClick={Logout}>Logout</Button>:""}
    </div>
  )
}

export default Home