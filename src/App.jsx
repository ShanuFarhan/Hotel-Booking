import React, { useState,useEffect } from 'react'
// import './styles/App.css';

import Login from './Pages/Login/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import HotelInfo from './Pages/HotelInfo/HotelInfo';
import Profile from './Pages/Profile/Profile';
const App = () => {
  const[info,setinfo]=useState("")
  const[islogged,setIslogged]=useState(false);
  // const[user,setUser]=useState(null)
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);
  const handleLogi=()=>{
    setIslogged(true)
  }
  
  return (
    <div id="main">
      <Routes>
        <Route  path="/home" element={<Home info={info} setinfo={setinfo}/>}/>
         <Route path="/" element={<Login/>}/>
         <Route path="/hotelinfo" element={<HotelInfo info={info} setinfo={setinfo}/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/hotelinfo/profile" element={<Profile/>}/>
      </Routes>
     
    </div>
  )
}


export default App;
