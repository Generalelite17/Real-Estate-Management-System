import React from "react";
import "../App.css"; // Import CSS file for styling

function Creators() {
  return (
    <div className="creators-container">
      <h1>Meet the Team Behind This Project</h1>
      <div className="author-box">
        <div className="author-info">
          <h2>Avalon Munoz</h2>
          <p>Backend Developer</p>
        </div>
      </div>
      <div className="author-box">
        <div className="author-info">
          <h2>Emmanuel Cardenas</h2>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="author-box">
        <div className="author-info">
          <h2>Durga Teja Pedapudi</h2>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Creators;
