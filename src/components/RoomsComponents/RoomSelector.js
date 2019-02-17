import React from 'react';
import IndividualRoom from './IndividualRoom'
import { connect } from 'react-redux';
import './RoomSelector.css';
// import db from '../../db.json';
import axios from 'axios';

class RoomSelector extends React.Component{

  componentDidMount() {
    axios
      .get('../../db.json')
      .then( data => {
        console.log(data);

      })
  }
  render(){
    return (
      <div>
        <IndividualRoom />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  roomData: state.data,
});
const mapDispatchToProps = dispatch =>({
  updateRoomList: () =>dispatch(updateRoomList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RoomSelector);