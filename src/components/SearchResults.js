/* eslint-disable array-callback-return */
import React from "react";
import "../styles/searchResults.css";
import PropTypes from "prop-types";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>Please enter a valid search item!</p>;
  }
  return (
    <>
      <p>Search results:</p>
      <div className="search-results">
        {results.map((item) => (
          <img
            key={results.indexOf(item)}
            data-testid="search-results__image"
            className="search-results__image"
            alt="space"
            src={item}
          />
        ))}
      </div>
    </>
  );
}

export default SearchResults;

SearchResults.defaultProps = {
  results: [],
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
};
