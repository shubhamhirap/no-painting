import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../components/NavItem";

const NavbarContainer = ({ toggle }) => {
  return (
    <div className={`navbar-container`}>
      <Link className={`nav-item-link`} to="/product">
        <NavItem
          text={`Product`}
          icon={NavItem.icon.PRODUCT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/template">
        <NavItem
          text={`Template`}
          icon={NavItem.icon.TEMPLATE}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/format">
        <NavItem
          text={`Format`}
          icon={NavItem.icon.FORMAT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/text">
        <NavItem
          text={`Text`}
          icon={NavItem.icon.TEXT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/object">
        <NavItem
          text={`Object`}
          icon={NavItem.icon.OBJECT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
    </div>
  );
};

export default NavbarContainer;
