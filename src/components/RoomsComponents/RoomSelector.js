import React from 'react';
// import IndividualRoom from './IndividualRoom'
import { connect } from 'react-redux';
import './RoomSelector.css';
import './IndividualRoom.css';
import CONSTANTS from '../../_constants/constants';
import axios from 'axios';
import updateRoomList from '../../actions/RoomActions';
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@material-ui/core/';
class RoomSelector extends React.Component{

  componentDidMount() {
    axios
      .get(CONSTANTS.getRoomsList)
      .then( payload => {
        this.props.updateRoomList(payload.data);
      })
  }
  handleSubmit = (e) => {
    console.log('CLICKED BUTTON', e);

  };
  render(){
    if (!this.props.roomData === undefined) return <div>Loading...</div>;
    return (
      <div>
          {this.props.roomData.rooms.map(info => <Card className="card">
          {console.log(info.data)}
            <CardHeader
            key={info.data.caption}
            title={info.data.caption}
            subheader={info.data.price + info.data.currency}
          />
          <CardMedia
          key={info.data.caption}
          className="card-media"
          image={info.data.imgPath}
          title={info.data.caption}
          />
          <CardContent>
            <Typography component="p">
              {info.data.description}
            </Typography>
          </CardContent>
          <Button key={info.data.caption} className="card-button" variant="flat" color="primary" onClick={this.handleSubmit}>Add Room</Button>
      </Card>
          )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  roomData: state.data,
});
const mapDispatchToProps = dispatch =>({
  updateRoomList: (data) =>dispatch(updateRoomList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RoomSelector);