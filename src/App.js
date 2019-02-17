import React, { Component } from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <NavBar />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
