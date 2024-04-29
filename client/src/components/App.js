import React from "react";
import "./styles/App.css"; // Import CSS file
import Header from "./components/Header";
import Footer from "./components/Footer";
import Listing from "./components/Listing";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Listing />
        <h1>React components in development</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
