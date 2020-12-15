import React from 'react';
import { connect } from 'react-redux';

import EventForm from './EventForm';
import { startAddEvent } from '../actions/events';

function AddEvent (props) {
  const onSubmit = (event) => {
    props.dispatch(startAddEvent(event));
    props.history.push('/');
  }
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header'>Save Event</h1>
        </div>
      </div>
      <div className='content-container'>
        <EventForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default connect()(AddEvent);
