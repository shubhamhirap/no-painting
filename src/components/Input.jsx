import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, labelText, id, value, placeholder, htmlFor, name }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      <label htmlFor={htmlFor}>{labelText}</label>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
};

Input.defaultProps = {
  type: "",
  id: "",
  placeholder: "",
  htmlFor: "",
  labelText: "",
};

export default Input;
