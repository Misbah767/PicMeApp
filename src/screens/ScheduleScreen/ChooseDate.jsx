import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './ChooseDate.css';
import Button from '../../Components/Button/Button';

export default function ChooseDate() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Choose Date</h2>

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

      <div className="main-calander">
        <DateRange
          ranges={range}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          className="custom-calendar"
        />
      </div>

      <Button variant='filled' className='calander-btn'>Continue</Button>
    </div>
  );
}
