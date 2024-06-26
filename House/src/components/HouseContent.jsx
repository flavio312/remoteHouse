import React, { useState } from 'react';
import { useEvents } from './EventContext';
import './content.css';

const HouseContent = () => {
  const { publishEvent } = useEvents();
  const [gateOpen, setGateOpen] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [temperature, setTemperature] = useState(22);

  const toggleGate = () => {
    setGateOpen(!gateOpen);
    publishEvent('GateToggled', { isOpen: !gateOpen });
  };

  const toggleDoor = () => {
    setDoorOpen(!doorOpen);
    publishEvent('DoorToggled', { isOpen: !doorOpen });
  };

  const toggleLight = () => {
    setLightOn(!lightOn);
    publishEvent('LightToggled', { isOn: !lightOn });
  };

  const changeTemperature = (newTemp) => {
    setTemperature(newTemp);
    publishEvent('TemperatureChanged', { temperature: newTemp });
  };

  return (
    <div className="house-container">
      <div className="roof"></div>
      <div className="house">
        
        <div className="window window-left"></div>
        <div className="window window-right"></div>
        <div className="door" style={{transform: `translateX(-50%) ${doorOpen ? 'translateY(100%)' : ''}`}}></div>
        <div className="gate" style={{transform: `${gateOpen ? 'translateX(-100%)' : ''}`}}></div>
        <div className="light" style={{opacity: lightOn ? 1 : 0.2}}></div>
        <div className="climate">
        <div className="house-info">
          <p>Temperatura: {temperature}°C</p>
          <button onClick={() => changeTemperature(temperature + 1)}>+</button>
          <button onClick={() => changeTemperature(temperature - 1)}>-</button>
        </div>
        </div>
        <div className="control-panel">
          <button onClick={toggleGate}>{gateOpen ? 'Cerrar Portón' : 'Abrir Portón'}</button>
          <button onClick={toggleDoor}>{doorOpen ? 'Cerrar Puerta' : 'Abrir Puerta'}</button>
          <button onClick={toggleLight}>{lightOn ? 'Apagar Luz' : 'Encender Luz'}</button>
        </div>
      </div>
    </div>
  );
};

export default HouseContent;
