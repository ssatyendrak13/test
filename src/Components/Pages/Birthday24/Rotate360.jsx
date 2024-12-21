import React from "react";
import "./Rotate360.css";
import first from "../../../Assets/Rotate360/1st.jpg";
import second from "../../../Assets/Rotate360/2nd.jpg";
import third from "../../../Assets/Rotate360/3rd.jpg";
import fourth from "../../../Assets/Rotate360/4th.jpg";
import fifth from "../../../Assets/Rotate360/5th.jpg";
import sixth from "../../../Assets/Rotate360/6th.jpg";
import seventh from "../../../Assets/Rotate360/7th.jpg";
import eighth from "../../../Assets/Rotate360/8th.jpg";
import ninth from "../../../Assets/Rotate360/9th.jpg";
import tenth from "../../../Assets/Rotate360/10th.jpg";
import eleventh from "../../../Assets/Rotate360/11th.jpg";
import twelfth from "../../../Assets/Rotate360/12th.jpg";

function Rotate360() {
  const images = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
  ];

  return (
    <div className="cylinder-container">
      <div className="cylinder">
        {images.map((src, index) => (
          <div
            key={index}
            className="cylinder-image"
            style={{
              transform: `rotateY(${
                index * (360 / images.length)
              }deg) translateZ(250px)`,
            }}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="birthday-message">
        <h1>Happy Birthday, My Love!</h1>
        <p>May your day be as bright and beautiful as your smile. 💖</p>
      </div>
    </div>
  );
}

export default Rotate360;
