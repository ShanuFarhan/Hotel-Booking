import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import NavBar from '../../components/NavBar/NavBar';
import { db } from '../../Firebase/config';
import "./Profile.css";
// import firebase from '../../Firbase/config';
const Profile = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'BookingDetails'));
        const reservationsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReservations(reservationsData);
        setError(null);
      } catch (error) {
        console.error('Error fetching reservations: ', error);
        setError('Failed to load booking history. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
        <NavBar/>
        <div className="booking-history">
      <h3>Booking History</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : reservations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Number of Guests</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.hotelName}</td>
                <td>{reservation.numOfGuests}</td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkOutDate}</td>
                <td>${reservation.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
    </div>
  )
}

export default Profile
