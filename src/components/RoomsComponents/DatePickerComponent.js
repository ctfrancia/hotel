import React, {Component} from 'react';
import { DatePicker } from 'material-ui-pickers';
import { connect } from 'react-redux';
// import { map } from 'async';
import { updateArrivalDate, updateDepartureDate } from '../../actions/RoomActions'

const date = new Date();
const tomorrow = date.setDate(date.getDate() + 1);
class DateSelector extends Component {
  state = {
    arrivalDate: Date.now(),
    departureDate: tomorrow,
  }
  componentDidMount() {
    this.props.updateArrivalDate(this.state.arrivalDate);
    this.props.updateDepartureDate(this.state.departureDate);
  }
  handleArrivalDate = date => {
    // this.setState({arrivalDate: date})
    // console.log('HANDLE ARRIVAL DATE', date);
    this.props.updateArrivalDate(date);
  };
  handleDepartureDate = date => {
    // this.setState({departureDate: date});
    this.props.updateDepartureDate(date);
  }

  render (){
    return (
      <div>
        <DatePicker
        margin="normal"
        label="Arrival Date:"
        onChange={this.handleArrivalDate}
        name="arrivalDate"
        value={this.props.arrivalDate}
        />

        <DatePicker
        margin="normal"
        label="Departure Date:"
        onChange={this.handleDepartureDate}
        name="departureDate"
        value={this.props.departureDate}
        />
      </div>

    )
  }
}
const mapStateToProps = state => ({
  arrivalDate: state.data.arrivalDate,
  departureDate: state.data.departureDate,
});

const mapDispatchToProps = dispatch =>({
  updateArrivalDate: date => dispatch(updateArrivalDate(date)),
  updateDepartureDate: date => dispatch(updateDepartureDate(date)),

});
export default connect(mapStateToProps, mapDispatchToProps)(DateSelector)
// export default DateSelector;