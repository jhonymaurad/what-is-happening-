import React from 'react';
import { connect } from 'react-redux';

import EventForm from './EventForm';
import { startEditEvent, startRemoveEvent } from '../actions/events';

function EditEvent (props) {
  const handleDelete = () => {
    props.dispatch(startRemoveEvent({ id: props.event.id }));
    props.history.push('/');
  }

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Event</h1>
        </div>
      </div>
      <EventForm
        event={props.event}
        onSubmit={(event) => {
          props.dispatch(startEditEvent(props.event.id, event));
          props.history.push('/')
        }}
      />
      <button className='button button--secondary' onClick={handleDelete}>Remove Event</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => {
      return event.id === props.match.params.id;
    })
  }
}

export default connect(mapStateToProps)(EditEvent);
