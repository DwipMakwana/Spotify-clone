// src/context/ButtonContext.jsx
import React, { createContext, useState } from 'react';

const ButtonContext = createContext({
  buttonStates: {},
  handleButtonClick: () => {},
});

const ButtonProvider = ({ children }) => {
  console.log('ButtonProvider rendered');
  const [buttonStates, setButtonStates] = useState({});
  console.log('Button states:', buttonStates);

  const handleButtonClick = (buttonId) => {
    console.log('Button clicked:', buttonId);
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonId]: !prevStates[buttonId],
    }));
  };

  return (
    <ButtonContext.Provider value={{ buttonStates, handleButtonClick }}>
      {children}
    </ButtonContext.Provider>
  );
};

export { ButtonProvider, ButtonContext };