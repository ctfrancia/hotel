import React, {Component} from 'react';
import { DatePicker } from 'material-ui-pickers';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';

class DateSelector extends Component {
  state = {
    arrivalDate: Date.now(),
    departureDate: Date.now()
  }
  handleArrivalDate = date => {
    this.setState({arrivalDate: date})
  };
  handleDepartureDate = date => {
    this.setState({departureDate: date});
  }

  render (){
    const { arrivalDate, departureDate } = this.state;
    return (
      <div>
        <DatePicker
        margin="normal"
        label="Arrival Date:"
        onChange={this.handleArrivalDate}
        name="arrivalDate"
        value={arrivalDate}
        />

        <DatePicker
        margin="normal"
        label="Departure Date:"
        onChange={this.handleDepartureDate}
        name="departureDate"
        value={departureDate}
        />
      </div>

    )
  }
}

export default DateSelector;