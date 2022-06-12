/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

function Search() {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
