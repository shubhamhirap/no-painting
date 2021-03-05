import React from "react";
import PropTypes from "prop-types";
import { FaCropAlt, FaObjectGroup, FaPinterestP } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { BiText } from "react-icons/bi";
import { IconBase } from "react-icons";

const ICON = {
  PRODUCT: <FaPinterestP />,
  TEMPLATE: <GrTemplate />,
  FORMAT: <FaCropAlt />,
  TEXT: <BiText />,
  OBJECT: <FaObjectGroup />,
};

const backgroundColor = {
  PRIMARY: "#0275D8",
  SUCCESS: "#5CB85C",
  DANGER: "#D9534F",
  SECONDARY: "#292B2C",
  LIGHT: "#F7F7F7",
  WARNING: "#F0AD4E",
  INFO: "#5BC0DE",
};

const color = {
  textPrimary: "#0275D8",
  textSuccess: "#5CB85C",
  textDanger: "#D9534F",
  textSecondary: "#292B2C",
  textLight: "#F7F7F7",
  textWarning: "#F0AD4E",
  textInfo: "#5BC0DE",
};

const Button = ({
  text,
  extraClass,
  id,
  onClickFunction,
  icon,
  backgroundColor,
  color,
  type,
  value,
}) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`btn ${extraClass}`}
        data-toggle="button"
        aria-pressed="false"
        value={value}
        onClick={onClickFunction}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {icon}
        <div className="textContainer text-center">{text}</div>
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  extraClass: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(ICON)),
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColor)),
  color: PropTypes.oneOf(Object.keys(color)),
  value: PropTypes.bool,
  onClickFunction: PropTypes.func,
};

Button.icon = ICON.PRODUCT;
Button.backgroundColor = backgroundColor;
Button.color = color;

Button.defaultProps = {
  type: "button",
  text: "",
  icon: null,
  id: "",
  extraClass: "",
  backgroundColor: null,
  color: null,
  value: null,
  onClickFunction: () => {},
};

export default Button;
