import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ICON } from "../assets/utils/Icons";


const ButtonGroup = ({
  id,
  extraClass,
  onClickFunc,
  icon1,
  icon2,
  icon3,
  text1,
  text2,
  text3,
}) => {
  return (
    <div id={id} className={`btnGroup ${extraClass}`}>
      <Button text={text1} />
      <Button text={text2} />
      <Button text={text3} />
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  icon1: PropTypes.oneOf(Object.keys(ICON)),
  icon2: PropTypes.oneOf(Object.keys(ICON)),
  icon3: PropTypes.oneOf(Object.keys(ICON)),
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  onClickFunc: PropTypes.func,
};

ButtonGroup.icon = ICON;

ButtonGroup.defaultProps = {
  id: "",
  extraClass: "",
  backgroundColor: null,
  color: null,
  icon1: null,
  icon2: null,
  icon3: null,
  text1: "",
  text2: "",
  text3: "",
  onClickFunc: () => {},
};

export default ButtonGroup;
