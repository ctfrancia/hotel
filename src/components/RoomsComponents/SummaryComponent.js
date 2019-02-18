import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';

class Summary extends Component {

  componentDidUpdate(){

  }


  render(){
    // const {} = this.props.roomSummary;
    return(
      <div>
        <Paper className="paper">
        <Typography variant="h5" component="h3">Reservation Summary:</Typography>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  roomSummary: state.data,
});
const mapDispatchToProps = dispatch => ({
  // updateRoomList: (data) => dispatch(updateRoomList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Summary);
