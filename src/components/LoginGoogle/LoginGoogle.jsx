import React, { useEffect, useState } from 'react'
import { auth,provider } from "../../Firebase/config" 
import { signInWithPopup } from 'firebase/auth'
import { Container,Button,Box, Typography } from '@mui/material';

// import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginGoogle.css"
import {useNavigate } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
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
  const handleLogin=()=>{
    navigate("/home")
  }
  return (
    <>
    <div className='loginform'>
      
        {value?(
            navigate("/home")
        ):(
    <>
        
      <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant='h4' style={{fontWeight:550}} >Sign in</Typography>
        <input style={{border:'none',paddingLeft:15,height:45,fontSize:14,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:30}}
        placeholder="Email"
        name="email"
        type='email'
        />
        <input style={{border:'none',paddingLeft:15,height:45,fontSize:14,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:30}}
        placeholder="Password"
        name="password"
        type='password'
        />
        <Button type="submit" variant="contained" onClick={handleLogin} 
      style={{fontWeight:550,backgroundColor:'white',color:'black',margin:'40px 0 0 50px',width:350}}>
        Login
      </Button> 
            <Row className='form mt-4'>
              <Col className="text-center">
                <Typography style={{fontWeight:550,margin:'20px 220px',marginLeft:'250px'}}>or</Typography>
                <Button style={{backgroundColor:'white',color:'black',fontWeight:550,margin:'0px 110px',marginLeft:'150px'}} className="google-button" onClick={handleClick}>
                  <img className="google-icon" src='https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png'/>
                 Sign in with Google
              </Button>
              </Col>
            </Row>
      </Box>   
      </Container>
            </>
        )}
    </div>
    </>
  )
}
export default LoginGoogle

