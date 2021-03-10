import React from "react";
import PropTypes from "prop-types";

const TextHolder = ({ id, extraClass, text }) => {
  return (
    <div id={id} className={`text-holder ${extraClass}`}>
      {text}
    </div>
  );
};

TextHolder.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  text: PropTypes.string,
};

TextHolder.defaultProps = {
  id: "",
  extraClass: "",
  text: "",
};

export default TextHolder;
