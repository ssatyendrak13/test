import React from 'react';
import './Rotate360.css';

function Rotate360() {
  const images = [
    '/assets/Birthday/1st.jpg',
    '/assets/Birthday/2nd.jpg',
    '/assets/Birthday/3rd.jpg',
    '/assets/Birthday/4th.jpg',
    '/assets/Birthday/5th.jpg',
    '/assets/Birthday/6th.jpg',
    '/assets/Birthday/7th.jpg',
    '/assets/Birthday/8th.jpg',
    '/assets/Birthday/9th.jpg',
    '/assets/Birthday/10th.jpg',
    '/assets/Birthday/11th.jpg',
    '/assets/Birthday/12th.jpg',
  ];

  return (
    <div className="cylinder-container">
      <div className="cylinder">
        {images.map((src, index) => (
          <div
            key={index}
            className="cylinder-image"
            style={{
              transform: `rotateY(${index * (360 / images.length)}deg) translateZ(250px)`,
            }}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="birthday-message">
        <h1>Happy Birthday, My Love!</h1>
        <p>
          May your day be as bright and beautiful as your smile. 💖
        </p>
      </div>
    </div>
  );
}

export default Rotate360;
