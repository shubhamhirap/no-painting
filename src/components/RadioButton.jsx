import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ id, extraClass, value, name }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        className={extraClass}
        name={name}
        value={value}
      />
    </>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  name: PropTypes.string,
};

RadioButton.defaultProps = {
  id: "",
  extraClass: "",
  name: "",
};

export default RadioButton;
