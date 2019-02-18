import React from 'react';
import DatePickerComponent from './DatePickerComponent';
import AdultChildSelector from './AdultChildSelector';
import './CheckinInformation.css';

const CheckInInformation = () => (
  <div className="ci-container">
    <DatePickerComponent />
    <AdultChildSelector />

  </div>
);
export default CheckInInformation;
