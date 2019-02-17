import React from 'react';
import DatePickerComponent from './DatePickerComponent';
import AdultChildSelector from './AdultChildSelector';
import './CheckinInformation.css';

const CheckInInformation = () => (
  <div className="ci-container">
    {/* <<input type="date"/>
    <input type="date"/> */}
    <DatePickerComponent />
    <AdultChildSelector />

  </div>
);
export default CheckInInformation;
