import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase/config';
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const fetchBookingCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'BookingDetails'));
        setBookingCount(querySnapshot.size);
      } catch (error) {
        console.error('Error fetching booking count:', error);
      }
    };
    fetchBookingCount();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-brand">
        <img src="data:image/png;base64,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" alt="" />
        BookStay
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-menu-item">
          <Link to="/home">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/profile" className="profile-link">
            <FaUser />
            {bookingCount > 0 && (
              <span className="booking-badge">{bookingCount}</span>
            )}
            <span>Profile</span>
          </Link>
        </li>
        <li className="navbar-menu-item">
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
