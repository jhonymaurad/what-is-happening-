import React from 'react';
import { connect } from 'react-redux';

import EventListItem from './EventListItem';
import selectEvent from '../selectors/events';

function EventList (props) {
  return (
    <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Events</div>
        <div className='show-for-desktop'>Events</div>
        <div className='show-for-desktop'>Amount</div>
      </div>
      <div className='list-body'>
        {props.events.length === 0
          ? (
            <div className='list-item--message'>
              <span>No events</span>
            </div>
            )
          : (
              props.events.map(event => (
                <EventListItem event={event} key={event.id} />
              ))
            )}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    events: selectEvent(state.events, state.filters)
  }
}

export default connect(mapStateToProps)(EventList);
