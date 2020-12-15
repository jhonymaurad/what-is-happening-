import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

function EventListItem ({ event }) {
  return (
    <Link className='list-item' to={`/edit/${event.id}`}>
      <div>
        <h3 className='list-item'>{event.description}</h3>
        <span className='list-item__subtitle'>
          {moment(event.createdAt).format('MMMM Do, YYYY')}
        </span>
      </div>
      <h3 className='list-item__data'>
        {numeral(event.amount / 100).format('$0,0.00')}
      </h3>
    </Link>
  );
}

export default (EventListItem);
