/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/search.css";

function Search() {
  const [value, setValue] = useState();
  return (
    <form>
      <input
        type="text"
        className="search__input"
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
