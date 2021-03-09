import React from "react";
import PropTypes from "prop-types";
import { ICON } from "../assets/utils/Icons";
import { BACKGROUNDCOLOR } from "../assets/utils/BackgroundColor";
import { COLOR } from "../assets/utils/Color";

const NavItem = ({ icon, text, extraClass, onClickFunction }) => {
  return (
    <li className={`nav-item ${extraClass}`} onClick={onClickFunction}>
      {icon}
      <div className="textContainer text-center">{text}</div>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string,
  extraClass: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(ICON)),
  backgroundColor: PropTypes.oneOf(Object.keys(BACKGROUNDCOLOR)),
  color: PropTypes.oneOf(Object.keys(COLOR)),
  value: PropTypes.bool,
  onClickFunction: PropTypes.func,
};

NavItem.icon = ICON;
NavItem.backgroundColor = BACKGROUNDCOLOR;
NavItem.color = COLOR;

NavItem.defaultProps = {
  text: "",
  icon: null,
  id: "",
  extraClass: "",
  backgroundColor: null,
  color: null,
  value: null,
  onClickFunction: () => {},
};

export default NavItem;
