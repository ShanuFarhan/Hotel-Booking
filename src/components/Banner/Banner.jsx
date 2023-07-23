import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./Banner.css"
import { Link } from 'react-router-dom';
const Banner = (props) => {
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
      fetchHotels();
    }, []);
  
    const fetchHotels = async () => {
      try {
        const response = await axios.get('https://hotels-api-4ltr.onrender.com/api/hotels');
        console.log(response.data);
        setHotels(response.data);
      } catch (error) {
        console.log(error);
      }
    }
      
      function handleClick(e){
      var hotelId=e.target.name
      for(let i=0;i<hotels.length;i++)
      {
      if(hotels[i].id== hotelId)
      {
        console.log(hotels[i]);
        props.setinfo(hotels[i]);
      }
      }
      
      // console.log("");
      // console.log("props.setinfo");
      // console.log(props.setinfo);
      // console.log("props.info");
      // console.log(props.info);
      }
      
      
  return (
    <div className="card-container">
    {hotels.map((hotel) => (
      <div className="card" key={hotel.id}>
       <Link onClick={handleClick} to="/hotelinfo"> <img name={hotel.id} src={hotel.thumbnail}/></Link>
        <h3>{hotel.address}</h3>
        <p>${hotel.pricePerNight} night</p>
      </div>
    ))}
  </div>
  )
}

export default Banner
