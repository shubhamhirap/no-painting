import React from "react";
import PropTypes from "prop-types";

const DropdownList = ({ id, defaultValue, extraClass, onChangeFunc }) => {
  return (
    <select
      id={id}
      defaultValue={defaultValue}
      className={`${extraClass}`}
      onChange={onChangeFunc}
    >
      <option value="1 ft">1 Feet</option>
      <option value="3 ft">3 Feet</option>
      <option value="5 ft">5 Feet</option>
      <option value="6 ft">6 Feet</option>
      <option value="9 ft">9 Feet</option>
      <option value="10 ft">10 Feet</option>
    </select>
  );
};

DropdownList.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  extraClass: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

DropdownList.defaultProps = {
  id: "",
  defaultValue: "",
  extraClass: "",
  onChangeFunc: () => {},
};
export default DropdownList;
