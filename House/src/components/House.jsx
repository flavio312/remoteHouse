import React from 'react';
import { EventProvider } from './EventContext';
import HouseContent from './HouseContent';

const House = () => {
  return (
    <EventProvider>
      <HouseContent />
    </EventProvider>
  );
};

export default House;
