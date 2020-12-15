import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectEvents from '../selectors/events';
import selectEventsTotal from '../selectors/events-total';

export function EventSummary ({ eventCount, eventTotal }) {
  const eventWord = eventCount === 1 ? 'event' : 'events';
  const formattedEventsTotal = numeral(eventTotal / 100).format('$0,0.00');
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{eventCount}</span> {eventWord} totalling
          <span>{formattedEventsTotal}</span>
          <dir className='page-header__actions'>
            <Link className='button' to='/create'>
              Add Event
            </Link>
          </dir>
        </h1>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const visibleEvents = selectEvents(state.events, state.filters);
  return {
    eventCount: visibleEvents.length,
    eventTotal: selectEventsTotal(visibleEvents)
  };
};

export default connect(mapStateToProps)(EventSummary);
