import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import "./Profile.css"
// import firebase from '../../Firbase/config';
const Profile = () => {
  const [reservations, setReservations] = useState([]);
  const numOfGuests = localStorage.getItem('numOfGuests') || '';
  const checkInDate = localStorage.getItem('checkInDate') || '';
  const checkOutDate = localStorage.getItem('checkOutDate') || '';
  const hotelName = localStorage.getItem('hotelName') || '';
  // const user = localStorage.getItem('user') || '';

  return (
    <div>
        <NavBar/>
        <div>
      <h3>Booking History</h3>
      <table>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Number of Guests</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {reservations.map((reservation) => ( */}
            <tr>
              <td>{hotelName}</td>
              <td>{numOfGuests}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              {/* <td>{user}</td> */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Profile
