import React, { Component } from 'react';
import { Paper, Card, CardHeader } from '@material-ui/core/';
import './IndividualRoom.css';
// import classes from '*.module.scss';


function IndividualRoom(props) {

  return (
  <div>
      <Card className="card">
        <CardHeader
        title={this.props.caption}
        subheader={this.props.price}
          />
      </Card>
    </div>
  )
}
export default IndividualRoom;