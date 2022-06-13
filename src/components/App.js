/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import ScrollTopButton from "./SrollTopButton";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="nasa-app">
      <img
        className="nasa-app__image"
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
      <ScrollTopButton isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}

export default App;
