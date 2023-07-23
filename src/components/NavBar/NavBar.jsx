import React,{ useState } from 'react'
import "./NavBar.css"
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaSignOutAlt, FaToggleOff, FaToggleOn } from 'react-icons/fa';

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

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
        BookStay
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-menu-item">
          <Link to="/home">
            <FaHome />
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/profile">
            
          </Link>
        </li>
        <li className="navbar-menu-item">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <FaToggleOn /> : <FaToggleOff />}
          </button>
        </li>
        <li className="navbar-menu-item">
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
