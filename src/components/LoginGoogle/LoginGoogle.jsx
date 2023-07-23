import React, { useEffect, useState } from 'react'
import { auth,provider } from "../../Firebase/config" 
import { signInWithPopup } from 'firebase/auth'
import "./LoginGoogle.css"
import Home from '../../Pages/Home/Home'
import { useNavigate } from 'react-router-dom'
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
    <div className='loginform'>
        {value?(
            navigate("/home")
        ):(
    //   <form >
    //          <h1>Login</h1>
    //         <input type="email" placeholder='email' />
    //         <input type="password" placeholder='password'/>
    //       <>  <button>Login</button>
    <>
  
            <div className="leftcontent">
              <h1>Online Hotel Booking</h1>
            </div>
            <div className='form'>
                <h2>Sign in</h2>
                <button className="google-button" onClick={handleClick}>
                  <img className="google-icon" src='https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png'/>
                 Sign in with Google
              </button>
            </div>
            </>
        )}
    </div>
  )
}
export default LoginGoogle
