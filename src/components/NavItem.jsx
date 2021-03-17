import React from "react";
import PropTypes from "prop-types";
import { ICON } from "../assets/utils/Icons";
import { BACKGROUNDCOLOR } from "../assets/utils/BackgroundColor";
import { COLOR } from "../assets/utils/Color";

const NavItem = ({ id, icon, text, extraClass, onClickFunction }) => {
  return (
    <li id={id} className={`nav-item ${extraClass}`} onClick={onClickFunction}>
      {icon}
      <div className="textContainer text-center">{text}</div>
    </li>
  );
};

NavItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  extraClass: PropTypes.string,
  // icon: PropTypes.oneOf(Object.keys(ICON)),
  icon: PropTypes.object,
  backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUNDCOLOR)),
  color: PropTypes.oneOf(Object.keys(COLOR)),
  value: PropTypes.bool,
  onClickFunction: PropTypes.func,
};

NavItem.icon = ICON;
NavItem.backgroundColor = BACKGROUNDCOLOR;
NavItem.color = COLOR;

NavItem.defaultProps = {
  id: "",
  text: "",
  icon: null,
  extraClass: "",
  backgroundColor: null,
  color: null,
  value: null,
  onClickFunction: () => {},
};

export default NavItem;
