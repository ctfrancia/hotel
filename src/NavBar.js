import React from 'react';
import { Link, Router } from '@reach/router';
import Contact from './views/Contact';
import Home from './views/Home';
import Membership from './views/Membership';
import Restaurant from './views/Restaurant';
import Rooms from './views/Rooms';
import Weddings from './views/Weddings';
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return(
    <div className="navContainer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="rooms">Rooms</Link>
        <Link to="restaurant">Restaurant</Link>
        logo
        <Link to="weddings">Weddings</Link>
        <Link to="membership">Membership</Link>
        <Link to="contact">Contact us</Link>
      </nav>
      <Router>
        <Home path= "/" />
        <Rooms path="/rooms"/>
        <Restaurant path="/restaurant" />
        <Weddings path="/weddings"/>
        <Membership path="/membership" />
        <Contact path="/contact" />
      </Router>
    </div>
    )
  }
}

export default NavBar;