//insert the information here for the adult children
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, FormControl } from '@material-ui/core';
import './AdultChildSelector.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AdultChildSelector extends React.Component {
  state = {
    adultCount: '',
    childCount: '',
    labelWidth: 0,
  };

  // componentDidMount() {
  //   this.setState({
  //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  //   });
  // }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div>
        <form autoComplete="off">
          <FormControl className="form-control">
            <InputLabel htmlFor="adult-Count">Adults</InputLabel>
            <Select
            value={this.state.adultCount}
            onChange={this.handleChange}
            inputProps={{
              name: 'adultCount',
              id: 'adult-count',
            }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {quantity.map(num => <MenuItem
                key={num}
                value={num}>
                {num}
                </MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="child-Count">Children</InputLabel>
            <Select
            value={this.state.childCount}
            onChange={this.handleChange}
            inputProps={{
              name: 'childCount',
              id: 'child-count',
            }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {quantity.map(num => <MenuItem
                key={num}
                value={num}>
                {num}
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}
AdultChildSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default AdultChildSelector;