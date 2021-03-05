import React from "react";
import Button from "../components/Button";

const NavbarContainer = ({ toggle }) => {
  return (
    <>
      <Button
        id="nav-button"
        extraClass="mt-2"
        icon={Button.icon.PRODUCT}
        backgroundColor={Button.backgroundColor.LIGHT}
        color={Button.color.textDark}
        text="Product"
        onClickFunction={toggle}
      />

      <Button
        id="nav-button"
        extraClass="mt-2"
        icon={Button.icon.TEMPLATE}
        backgroundColor={Button.backgroundColor.LIGHT}
        color={Button.color.textDark}
        text="Template"
        onClickFunction={toggle}
      />

      <Button
        id="nav-button"
        extraClass="mt-2"
        icon={Button.icon.FORMAT}
        backgroundColor={Button.backgroundColor.LIGHT}
        color={Button.color.textDark}
        text="Format"
        onClickFunction={toggle}
      />
      <Button
        id="nav-button"
        extraClass="mt-2"
        icon={Button.icon.TEXT}
        backgroundColor={Button.backgroundColor.LIGHT}
        color={Button.color.textDark}
        text="Text"
        onClickFunction={toggle}
      />
      <Button
        id="nav-button"
        extraClass="mt-2"
        icon={Button.icon.OBJECT}
        backgroundColor={Button.backgroundColor.LIGHT}
        color={Button.color.textDark}
        text="Object"
        onClickFunction={toggle}
      />
    </>
  );
};

export default NavbarContainer;
