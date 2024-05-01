import React from "react";

function Welcome() {
  return (
    <div className="welcome-container text-center text-3xl font-bold">
      <h1>Welcome to Our App</h1>
      <p>Get started by signing up or logging in.</p>
      <div className="button-container">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Welcome;
