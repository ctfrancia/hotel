//insert the information here for the adult children
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';
// import PropTypes from 'prop-types';
import { MenuItem, FormControl } from '@material-ui/core';
import './AdultChildSelector.css';

class AdultChildSelector extends React.Component {
  state = {
    adultCount: 1,
    childCount: 1,
    labelWidth: 0,
  };
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
          <FormControl className="form-control">
            <InputLabel htmlFor="child-Count">Children</InputLabel>
            <Select
              className="s-input"
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

export default AdultChildSelector;