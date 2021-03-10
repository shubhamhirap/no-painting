import React from "react";
import PropTypes from "prop-types";

const Label = ({ id, extraClass, htmlFor, labelText }) => {
  return (
    <>
      <label id={id} className={extraClass} htmlFor={htmlFor}>
        {labelText}
      </label>
    </>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
};

Label.defaultProps = {
  id: "",
  extraClass: "",
  htmlFor: "",
  labelText: "",
};

export default Label;
