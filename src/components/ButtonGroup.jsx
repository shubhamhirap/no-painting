import React from "react";
import PropTypes from "prop-types";
import { FaCropAlt, FaObjectGroup, FaPinterestP } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { BiText } from "react-icons/bi";
import Button from "./Button";

const icon = {
  PRODUCT: <FaPinterestP />,
  TEMPLATE: <GrTemplate />,
  FORMAT: <FaCropAlt />,
  TEXT: <BiText />,
  OBJECT: <FaObjectGroup />,
};

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
  icon1: PropTypes.oneOf(Object.keys(icon)),
  icon2: PropTypes.oneOf(Object.keys(icon)),
  icon3: PropTypes.oneOf(Object.keys(icon)),
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  onClickFunc: PropTypes.func,
};

ButtonGroup.icon = icon;

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
