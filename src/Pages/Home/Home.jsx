
import React from 'react'

import Banner from '../../components/Banner/Banner'
import NavBar from '../../components/NavBar/NavBar'
const Home = (props) => {
  
  return (
    <div>
      <NavBar/>
      <Banner info={props.info} setinfo={props.setinfo}/>
    </div>
  )
}

export default Home
