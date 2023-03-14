import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
              <>
        <Card style={{ width: '18rem', margin:'0 auto'}}>
               <Card.Body>
      
       <Card.Subtitle className="mb-2 text-muted">Welcome To Our Website</Card.Subtitle>
      
     <Button  className='but1' variant="primary"> <Link style={{color:"white"}} to='/signin'>Signup</Link></Button>  
    <Button className='but2'  variant="primary"> <Link style={{color:"white"}}  to='/login'>Login</Link></Button>  
       
   </Card.Body>
  </Card>
         </>
 </div>
  )
}

export default Navbar