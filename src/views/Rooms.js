import React, { Component } from 'react';
import CheckInInformation from '../components/RoomsComponents/CheckInInformation';
import RoomSelector from '../components/RoomsComponents/RoomSelector';
class Rooms extends Component {

  render() {
    return (
      <div className="rooms-containter">
        <CheckInInformation />
        <RoomSelector />

      </div>
    );
  }
}
export default Rooms;