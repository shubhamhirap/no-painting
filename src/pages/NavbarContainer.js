import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import NavItem from "../components/NavItem";

const NavbarContainer = ({ toggle }) => {
  return (
    <div className={`navbar-container`}>
      <Link className={`nav-item-link`} to="/product">
        {/* <Button
          id="nav-button"
          extraClass="mt-2"
          icon={Button.icon.PRODUCT}
          backgroundColor={Button.backgroundColor.LIGHT}
          color={Button.color.textDark}
          text="Product"
          onClickFunction={toggle}
        /> */}
        <NavItem
          text={`Product`}
          icon={NavItem.icon.PRODUCT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/template">
        {/* <Button
          id="nav-button"
          extraClass="mt-2"
          icon={Button.icon.TEMPLATE}
          backgroundColor={Button.backgroundColor.LIGHT}
          color={Button.color.textDark}
          text="Template"
          onClickFunction={toggle}
        /> */}
        <NavItem
          text={`Template`}
          icon={NavItem.icon.TEMPLATE}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/format">
        {/* <Button
          id="nav-button"
          extraClass="mt-2"
          icon={Button.icon.FORMAT}
          backgroundColor={Button.backgroundColor.LIGHT}
          color={Button.color.textDark}
          text="Format"
          onClickFunction={toggle}
        /> */}
        <NavItem
          text={`Format`}
          icon={NavItem.icon.FORMAT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/text">
        {/* <Button
          id="nav-button"
          extraClass="mt-2"
          icon={Button.icon.TEXT}
          backgroundColor={Button.backgroundColor.LIGHT}
          color={Button.color.textDark}
          text="Text"
          onClickFunction={toggle}
        /> */}
        <NavItem
          text={`Text`}
          icon={NavItem.icon.TEXT}
          onClickFunction={toggle}
          extraClass={`mt-2 mb-2`}
        />
      </Link>
      <Link className={`nav-item-link`} to="/object">
        {/* <Button
          id="nav-button"
          extraClass="mt-2"
          icon={Button.icon.OBJECT}
          backgroundColor={Button.backgroundColor.LIGHT}
          color={Button.color.textDark}
          text="Object"
          onClickFunction={toggle}
        /> */}
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
