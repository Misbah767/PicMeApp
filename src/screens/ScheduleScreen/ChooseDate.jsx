import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './ChooseDate.css';

export default function ChooseDate() {
  const [range, setRange] = useState([
    {
      startDate: new Date('2024-07-16'),
      endDate: new Date('2024-07-18'),
      key: 'selection'
    }
  ]);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Choose Date</h2>

      {/* Booking From / To */}
      <div className="booking-range">
        <div>
          Booking From
          <br />
          {format(range[0].startDate, 'MMMM d, yyyy')}
        </div>

        <div className="divider-calender"></div>

        <div>
          Booking To
          <br />
          {format(range[0].endDate, 'MMMM d, yyyy')}
        </div>
      </div>

      {/* Calendar */}
      <div className="calendar-wrapper">
        <DateRange
          editableDateInputs={true}
          onChange={item => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          rangeColors={['#2BAFC7']} 
        />
      </div>

      <button className="calander-btn">CONTINUE</button>
    </div>
  );
}
