/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/search.css";
import PropTypes from "prop-types";
import { IoIosRocket } from "react-icons/io";
import getImages from "../requests/getImages";

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          data-testid="search__button"
          className="search__button"
          type="submit"
        >
          <IoIosRocket data-testid="search__icon" className="search__icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;

Search.defaultProps = {
  setSearchResults: () => {},
};

Search.propTypes = {
  setSearchResults: PropTypes.func,
};
