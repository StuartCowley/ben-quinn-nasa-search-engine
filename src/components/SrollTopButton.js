/* eslint-disable no-unused-expressions */
import React from "react";
import "../styles/scrollTopButton.css";
import PropTypes from "prop-types";

function ScrollTopButton({ isVisible, setIsVisible }) {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      type="submit"
      data-testid="scroll-top-button"
      className="scroll-top-button"
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline" : "none" }}
    >
      Scroll to top
    </button>
  );
}

export default ScrollTopButton;

ScrollTopButton.defaultProps = {
  isVisible: false,
  setIsVisible: () => {},
};

ScrollTopButton.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
};
