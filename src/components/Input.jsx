import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  id,
  extraClass,
  value,
  placeholder,
  name,
  onChangeFunc,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={extraClass}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeFunc}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  extraClass: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

Input.defaultProps = {
  type: "",
  id: "",
  extraClass: "",
  placeholder: "",
  onChangeFunc: () => {},
};

export default Input;
