import React from 'react';
import './LoveSymbols.css'; // Make sure the CSS is imported
import Birthday24 from '../Birthday24/Birthday24';
import Rotate360 from '../Birthday24/Rotate360';

function LoveSymbols() {
  // Define the number of love symbols
  const numberOfSymbols = 40;

  return (
    <div className="love-symbols-container">
      {/* Generate multiple love symbols dynamically */}
      {Array.from({ length: numberOfSymbols }).map((_, index) => (
        <div
          key={index}
          className="love-symbol"
          style={{
            top: `${Math.random() * 100}%`,   // Random vertical position
            left: `${Math.random() * 100}%`,  // Random horizontal position
            animationDelay: `${Math.random() * 2}s`, // Random animation delay
            opacity: Math.random(), // Random initial opacity for variation
          }}
        >
          ❤️
        </div>
      ))}
      <Birthday24/>
    </div>
  );
}

export default LoveSymbols;
