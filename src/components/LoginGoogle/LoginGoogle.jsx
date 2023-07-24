import React, { useEffect, useState } from 'react'
import { auth,provider } from "../../Firebase/config" 
import { signInWithPopup } from 'firebase/auth'
import "./LoginGoogle.css"
import Home from '../../Pages/Home/Home'
import { useNavigate } from 'react-router-dom'
import { Container,Button, Row, Col} from 'react-bootstrap'
const LoginGoogle = () => {
    const navigate=useNavigate()
    const[value,setValue]=useState("")
  const handleClick=()=>{
      signInWithPopup(auth,provider).then((data)=>{
        console.log(data.user.email);
        setValue(data.user.email)
        localStorage.getItem("email",data.user.email)
      })
  }
  useEffect(()=>{
    setValue(localStorage.getItem("email"))
  })
  return (
    <>
    <div className='loginform'>
      
        {value?(
            navigate("/home")
        ):(
    <>
          <Container >
            <Row className="leftcontent">
              <Col className='text-center'>
              <h1>Online Hotel Booking</h1>
              </Col>
            </Row>
            <Row className='form mt-4'>
              <Col className="text-center">
                <h2>Sign in</h2>
                </Col>
            </Row>
            <Row className='form mt-4'>
              <Col className="text-center">
                <Button className="google-button" onClick={handleClick}>
                  <img className="google-icon" src='https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png'/>
                 Sign in with Google
              </Button>
              </Col>
            </Row>
            </Container>
            </>
        )}
    </div>
    </>
  )
}
export default LoginGoogle
