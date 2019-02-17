import React from 'react';
import { Link, Router } from '@reach/router';
import Contact from './views/Contact';
import Home from './views/Home';
import Membership from './views/Membership';
import Restaurant from './views/Restaurant';
import Rooms from './views/Rooms';
import Weddings from './views/Weddings';
import './NavBar.css';
import logo from './images/hotel-logo.jpg';

class NavBar extends React.Component {

  render() {
    return(
      <div>
        <div className="nav-container">
          <div>
            <Link className="link-css hvr-grow" to="/">Home</Link>
            <Link className="link-css hvr-grow" to="rooms">Rooms</Link>
            <Link className="link-css hvr-grow" to="restaurant">Restaurant</Link>
          </div>
          <div>
            <Link className="link-css" to="/"><img className="nav-logo" src={logo} alt="logo"/></Link>
          </div>
          <div>
            <Link className="link-css hvr-grow" to="weddings">Weddings</Link>
            <Link className="link-css hvr-grow" to="membership">Membership</Link>
            <Link className="link-css hvr-grow" to="contact">Contact us</Link>
          </div>
        </div>
        <div>
          <Router>
            <Home path= "/" />
            <Rooms path="/rooms"/>
            <Restaurant path="/restaurant" />
            <Weddings path="/weddings"/>
            <Membership path="/membership" />
            <Contact path="/contact" />
          </Router>
        </div>

      </div>
    )
  }
}

export default NavBar;