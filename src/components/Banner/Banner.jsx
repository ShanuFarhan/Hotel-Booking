import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import "./Banner.css";
const Banner = (props) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetchHotels();
    }, []);
  
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://hotels-api-4ltr.onrender.com/api/hotels');
        console.log(response.data);
        setHotels(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
      
    function handleClick(e){
      var hotelId = e.target.name
      for(let i=0; i<hotels.length; i++) {
        if(hotels[i].id == hotelId) {
          console.log(hotels[i]);
          props.setinfo(hotels[i]);
        }
      }
    }
      
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-container">
          {hotels.map((hotel) => (
            <div className="card" key={hotel.id}>
              <Link onClick={handleClick} to="/hotelinfo">
                <img name={hotel.id} src={hotel.thumbnail} alt={hotel.name}/>
              </Link>
              <h3>{hotel.address}</h3>
              <p>${hotel.pricePerNight} night</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Banner
