import React from 'react'
import Hotels from '../../components/Hotels/Hotels'
import NavBar from '../../components/NavBar/NavBar'
const HotelInfo = (props) => {
  return (
    <div>
      <NavBar/>
      <Hotels info={props.info} setinfo={props.setinfo} />
    </div>
  )
}

export default HotelInfo
