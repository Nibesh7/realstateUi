import React, { useState } from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true
  return (
    <nav>
      <div className='left'>
        <a href="/" className='logo'>
          <img src="/logo.png" alt="Logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/list">Property</a>
        <a href="/contacts">Contacts</a>
        <a href="/agents">Agents</a>
      </div>
      <div className='right'>

      {user ? (
        <div className='user'>
          <img  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>John cena</span>
          <Link to ={'/profile'} className='profile'> 
            <div className="notification">3</div>
            Profile
          </Link>
        </div>
      ) : (
        <>
          <a href="/signin">Sign In</a>
          <a href="/signup" className="register">Sign Up</a>
        </>
      )}


        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src="/menu.png" alt="Menu Icon"/>
        </div>

        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
          <a href="/agents">Agents</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
