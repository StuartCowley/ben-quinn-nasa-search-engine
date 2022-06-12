/* eslint-disable array-callback-return */
import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results!</p>;
  }
  return (
    <>
      <p>Search results:</p>
      {results.map((item) => (
        <img
          key={results.indexOf(item)}
          data-testid={`search-results__image${results.indexOf(item)}`}
          className={`search-results__image${results.indexOf(item)}`}
          alt="space"
          src={item}
        />
      ))}
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
