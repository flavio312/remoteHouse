import React, { createContext, useContext, useState, useCallback } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const publishEvent = useCallback((eventType, data) => {
    const newEvent = { type: eventType, data, timestamp: new Date().toISOString() };
    setEvents(prevEvents => [...prevEvents, newEvent]);

    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Evento guardado:', data);
    })
    .catch(error => {
      console.error('Error al guardar el evento:', error);
    });
  }, []);

  return (
    <EventContext.Provider value={{ events, publishEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
