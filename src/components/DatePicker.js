import React, { useState } from "react";
import "./date.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import './date.css'
import {Button} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges){
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
  }


  return (
    <div className="date">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="date_background">
        <h2>
          Number of Guests
          <PeopleIcon />
          <input type="number" min={1} defaultValue={2} />
        </h2>
        <Button>Search Airbnb</Button>
      </div>
    </div>
  );
};

export default DatePicker;
