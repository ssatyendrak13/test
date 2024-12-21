import React, { useState } from "react";
import birthdayGirl from "../../../Assets/Birthday/4th.jpg";
import memory1 from "../../../Assets/Birthday/1st.jpg";
import memory2 from "../../../Assets/Birthday/2nd.jpg";
import memory3 from "../../../Assets/Birthday/3rd.jpg";
import "./Birthday24.css";

function Birthday24() {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSurpriseClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 5000); // Animation lasts for 5 seconds
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: "#ffe6f2",
        color: "#ff1493",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <img
          src={birthdayGirl}
          alt="Birthday Girl"
          style={{
            borderRadius: "50%",
            width: "150px",
            border: "5px solid #ff1493",
          }}
        />
        <h1 style={{ fontSize: "2.5em", marginTop: "20px" }}>
          Happy Birthday, Sonali!
        </h1>
        <p style={{ fontSize: "1.2em", maxWidth: "600px", margin: "auto" }}>
          Wishing you a day filled with love, laughter, and happiness. You
          deserve the best!
        </p>
        <div style={{ fontSize: '5em', marginTop: '20px', color: '#ff69b4' }}>❤️</div>
      </header>

      {/* Love Symbols Section */}
      <section
        className="symbols-section"
        style={{ textAlign: "center", margin: "30px 0" }}
      >
        <div style={{ fontSize: "2em" }}>❤️ 💖 💞 🌟 ✨</div>
      </section>

      {/* Gallery Section */}
      <section
        className="gallery-section"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2em" }}>Special Moments</h2>
        <div
          className="gallery"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img
            src={memory1}
            alt="Memory 1"
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={memory2}
            alt="Memory 2"
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={memory3}
            alt="Memory 3"
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* Surprise Button Section */}
      <section
        className="surprise-section"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <button
          style={{
            backgroundColor: "#ff1493",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            fontSize: "1em",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleSurpriseClick}
        >
          Click for a Surprise!
        </button>
        {showAnimation && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 20px 10px #ff69b4", // Initial glow
              animation: "glow 1.5s infinite", // Adding the glow animation
              zIndex: 1000,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3em", color: "#ff69b4" }}>
              🎉🎂 Happy Birthday Sonali! 🎂🎉
            </div>
            <div
              style={{ fontSize: "1.5em", marginTop: "10px", color: "#ff1493" }}
            >
              You are truly special! 💖
            </div>
          </div>
        )}
        {showAnimation && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          ></div>
        )}
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "0.8em",
          color: "#777",
        }}
      >
        Made with ❤️ by Satyendra
      </footer>
    </div>
  );
}

export default Birthday24;
