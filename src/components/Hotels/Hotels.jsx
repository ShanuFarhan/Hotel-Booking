import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/config';
import "./Hotels.css";
const Hotels = (props) => {
  const[showModel,setShowmodel]=useState(false)
  const[guests,setGuests]=useState("")
  const[checkIn,setCheckIn]=useState("")
  const[checkOut,setCheckOut]=useState("")
  const [numberOfNights, setNumberOfNights] = useState(0);
  const[totalPrice,settotalPrice]=useState();
  const[booked,setBooked]=useState(false)

  const handleClick=()=>{
    setShowmodel(true)
    setBooked(false)
  }
  const calculateNumberOfNights = () => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setNumberOfNights(numberOfDays);
  };
  const total=(e)=>{
    settotalPrice(props.info.pricePerNight*numberOfNights)
  }
  const handleReservation=()=>{
    total()
    setShowmodel(true)
    setBooked(false)
  }
  
  const handleconfirm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'BookingDetails'), {
        numOfGuests: guests,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        hotelName: props.info.name,
        totalPrice: totalPrice
      });
      setBooked(true);
      setShowmodel(false);
      setGuests("");
      setCheckIn("");
      setCheckOut("");
      setNumberOfNights("");
      settotalPrice("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
    <div className='hotelDetails'>
      <p>{props.info.slug}</p>
      <div className="roomimages">
        <img src={props.info.images[0].img}></img>
        <img src={props.info.images[1].img}></img>
        <img src={props.info.images[2].img}></img>
        <img src={props.info.images[3].img}></img>
        <img src={props.info.images[4].img}></img>
        <img src={props.info.images[5].img}></img>
      </div>
      <div className="rooms">
        <p>{props.info.rooms[0].content}</p>
        <p>{props.info.rooms[1].content}</p>
        <p>{props.info.rooms[2].content}</p>
        <p>{props.info.rooms[3].content}</p>
      </div>
      <div className="aboutplace">
        <p>{props.info.aboutThePlace}</p>
      </div>
      <div className="offers">
        <h3 className=''>Whats this place offer!!</h3>
        <h5>{props.info.features[0].text}</h5>
        <h5>{props.info.features[1].text}</h5>
        <h5>{props.info.features[2].text}</h5>
        <h5>{props.info.features[3].text}</h5>
        <h5>{props.info.features[4].text}</h5>
        <h5>{props.info.features[5].text}</h5>
      </div>
      {booked ?(
        <div className="booked">
          <h4 className='bookedmsg'>Booked Successfully</h4>
          <Link to="/profile"><button>Go to Profile</button></Link>
        </div>
      ):(
      <a href="#res"><button onClick={handleClick} className="reserveBtn">Reserve</button></a> 
      )}
    </div>
    {showModel &&(
    <div className="reserveDetails">
        <div id='res' className="model">
          <h5>${props.info.pricePerNight} /night</h5>
          <label>
              Number of Guests:
              <input type="number" value={guests} onChange={((e)=>setGuests(e.target.value))} />
            </label>
            <label>
              Check-In Date:
              <input type="date" value={checkIn} onChange={((e)=>setCheckIn(e.target.value))} />
            </label>
            <label>
              Check-Out Date:
              <input  type="date" value={checkOut} onChange={((e)=>setCheckOut(e.target.value))} />
            </label>
            {numberOfNights>0 &&(
           <b><p >{numberOfNights} Night</p></b>
          )}
            <button onClick={calculateNumberOfNights}>Confirm Date</button>
            {totalPrice&&(
          <b><p>$Total Price: {totalPrice}</p></b>
        )}
            <button onClick={handleReservation}>Reserve</button>
            <button onClick={handleconfirm}>Confirm</button>
        </div>
        
    </div>
    )}
    </>
  )
}

export default Hotels
//https://hotels-api-4ltr.onrender.com/api/hotels/{slug}.