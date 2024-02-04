import React, { useState } from 'react';
import './EightBall.css'; 

function EightBall({ answers }) {
  const [msg, setMsg] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  const [colorCounts, setColorCounts] = useState({ green: 0, goldenrod: 0, red: 0});

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMsg(msg);
    setColor(color);
    setColorCounts(prevCounts => ({ ...prevCounts, [color]: prevCounts[color] + 1 }));
  };

  const handleReset = () => {
    setMsg('Think of a Question');
    setColor('black');
    setColorCounts({ green: 0, goldenrod: 0, red: 0,});
  };

  return (
    <div className="EightBall-container">
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
        <p>{msg}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div className="color-counts">
        <p>Green: {colorCounts.green}</p>
        <p>Gold: {colorCounts.goldenrod}</p>
        <p>Red: {colorCounts.red}</p>
      </div>
    </div>
  );
}

export default EightBall;
