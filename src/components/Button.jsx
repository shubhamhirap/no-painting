import React from "react";
import PropTypes from "prop-types";
import { ICON } from "../assets/utils/Icons";
import { BACKGROUNDCOLOR } from "../assets/utils/BackgroundColor";
import { COLOR } from "../assets/utils/Color";

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
  backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUNDCOLOR)),
  color: PropTypes.oneOf(Object.keys(COLOR)),
  value: PropTypes.bool,
  onClickFunction: PropTypes.func,
};

Button.icon = ICON;
Button.backgroundColor = BACKGROUNDCOLOR;
Button.color = COLOR;

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
