import React, { Component } from 'react';
import CheckInInformation from '../components/RoomsComponents/CheckInInformation';
import RoomSelector from '../components/RoomsComponents/RoomSelector';
import Summary from '../components/RoomsComponents/SummaryComponent';
import './Rooms.css'
class Rooms extends Component {

  render() {
    return (
      <div className="rooms-containter">
        <CheckInInformation />
        <div className="rooms-and-summary">
          <RoomSelector />
          <Summary />
        </div>
      </div>
    );
  }
}
export default Rooms;