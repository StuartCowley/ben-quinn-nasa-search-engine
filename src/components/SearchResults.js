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
      <img
        data-testid="search-results__image"
        className="search-results__image"
        alt="card"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
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
