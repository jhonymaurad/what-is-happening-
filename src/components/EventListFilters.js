import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

function EventListFilters (props) {
  console.log(props)
  const [calendarFocus, setCalendarFocus] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  };

  const onTextChange = e => props.setTextFilter(e.target.value);

  const onFocusChange = calendarFocus => {
    setCalendarFocus(calendarFocus);
  };

  const onSortChange = e => {
    if (e.target.value === 'date') {
      props.sortByDate();
    } else if (e.target.value === 'amount') {
      props.sortByAmount();
    }
  };

  return (
    <div className='content-container'>
      <div className='input-group'>
        <div className='input-group__item'>
          <input
            className='text-input'
            type='text'
            value={props.filters.text}
            onChange={onTextChange}
            placeholder='Search Events'
          />
        </div>
        <div className='input-group__item'>
          <select
            className='select'
            value={props.filters.sortBy}
            onChange={onSortChange}
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
        </div>

        <div className='input-group__item'>
          <DateRangePicker
            startDateId='start'
            endDateId='end'
            startDate={props.filters.startDate}
            endDate={props.filters.endDate}
            onDatesChange={onDatesChange}
            focusedInput={calendarFocus}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    setByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListFilters);
