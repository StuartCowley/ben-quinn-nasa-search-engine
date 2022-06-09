import React from "react";
import "../styles/app.css";
import Search from "./Search";

function App() {
  return (
    <div className="nasa-app">
      <img
        className="nasa-app__image"
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      />
      <Search />
    </div>
  );
}

export default App;
