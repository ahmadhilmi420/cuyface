import React from "react";

function Navheader() {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-extrabold bg-gradient-to-l from-blue-500 via-pink-500 to-purple-400 text-transparent bg-clip-text shadow-lg inline-block" style={{ filter: "drop-shadow(0 0 10px rgba(235, 70, 150, 0.7))" }}>
        CUYFACE | PREDICT YOUR FACE
      </h1>
      <p> Ramal berdasarkan foto selfie kalian</p>
    </header>
  );
}

export default Navheader;
