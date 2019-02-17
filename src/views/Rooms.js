import React, { Component } from 'react';
import CheckInInformation from '../components/RoomsComponents/CheckInInformation';

class Rooms extends Component {

  render() {
    return (
      <div className="rooms-containter">
        <CheckInInformation />
      </div>
    );
  }
}
export default Rooms;