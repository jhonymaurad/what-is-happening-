import React from 'react';

import EventList from './EventList';
import EventListFilters from './EventListFilters';
import EventSummary from './EventSummary';

function EventsDashboardPage () {
  return (
    <div>
      <EventSummary />
      <EventListFilters />
      <EventList />
    </div>
  )
};

export default EventsDashboardPage;
