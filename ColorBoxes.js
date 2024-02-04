import React, { useState } from 'react';
import './ColorBoxes.css'; // Make sure to create this CSS file for styling

const generateRandomColor = () => {
  const possibleColors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'yellow', 'cyan'];
  const randomIndex = Math.floor(Math.random() * possibleColors.length);
  return possibleColors[randomIndex];
};

const initialColors = Array.from({ length: 16 }, generateRandomColor);

function ColorBoxes() {
  const [colors, setColors] = useState(initialColors);

  const changeColor = () => {
    const newColors = [...colors];
    const boxToChange = Math.floor(Math.random() * newColors.length);
    newColors[boxToChange] = generateRandomColor();
    setColors(newColors);
  };

  return (
    <div className="ColorBoxes-container">
      {colors.map((color, index) => (
        <div key={index} className="ColorBox" style={{ backgroundColor: color }}></div>
      ))}
      <button onClick={changeColor}>Change</button>
    </div>
  );
}

export default ColorBoxes;
