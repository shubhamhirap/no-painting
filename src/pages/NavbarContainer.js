import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../components/NavItem";

const NavbarContainer = ({ toggle }) => {
  const [productSelected, setProductSelected] = useState(false);
  const [templateSelected, setTemplateSelected] = useState(false);
  const [formatSelected, setFormatSelected] = useState(false);
  const [textSelected, setTextSelected] = useState(false);
  const [objectSelected, setObjectSelected] = useState(false);

  const handleClick = (data) => {
    if (data === "product") {
      setProductSelected(true);
      setTemplateSelected(false);
      setFormatSelected(false);
      setTextSelected(false);
      setObjectSelected(false);
    } else if (data === "template") {
      setProductSelected(false);
      setTemplateSelected(true);
      setFormatSelected(false);
      setTextSelected(false);
      setObjectSelected(false);
    } else if (data === "format") {
      setProductSelected(false);
      setTemplateSelected(false);
      setFormatSelected(true);
      setTextSelected(false);
      setObjectSelected(false);
    } else if (data === "text") {
      setProductSelected(false);
      setTemplateSelected(false);
      setFormatSelected(false);
      setTextSelected(true);
      setObjectSelected(false);
    } else {
      setProductSelected(false);
      setTemplateSelected(false);
      setFormatSelected(false);
      setTextSelected(false);
      setObjectSelected(true);
    }
  };

  return (
    <div className={`navbar-container`}>
      <Link
        className={`nav-item-link ${productSelected && "selected"}`}
        to="/product"
        onClick={() => handleClick("product")}
      >
        <NavItem
          id={productSelected && "selected-nav-item"}
          text={`Product`}
          icon={NavItem.icon.PRODUCT}
          onClickFunction={toggle}
        />
      </Link>
      <Link
        className={`nav-item-link ${templateSelected && "selected"}`}
        to="/template"
        onClick={() => handleClick("template")}
      >
        <NavItem
          id={templateSelected && "selected-nav-item"}
          text={`Template`}
          icon={NavItem.icon.TEMPLATE}
          onClickFunction={toggle}
        />
      </Link>
      <Link
        className={`nav-item-link ${formatSelected && "selected"}`}
        to="/format"
        onClick={() => handleClick("format")}
      >
        <NavItem
          id={formatSelected && "selected-nav-item"}
          text={`Format`}
          icon={NavItem.icon.FORMAT}
          onClickFunction={toggle}
        />
      </Link>
      <Link
        className={`nav-item-link ${textSelected && "selected"}`}
        to="/text"
        onClick={() => handleClick("text")}
      >
        <NavItem
          id={textSelected && "selected-nav-item"}
          text={`Text`}
          icon={NavItem.icon.TEXT}
          onClickFunction={toggle}
        />
      </Link>
      <Link
        className={`nav-item-link ${objectSelected && "selected"}`}
        to="/object"
        onClick={() => handleClick("object")}
      >
        <NavItem
          id={objectSelected && "selected-nav-item"}
          text={`Object`}
          icon={NavItem.icon.OBJECT}
          onClickFunction={toggle}
        />
      </Link>
    </div>
  );
};

export default NavbarContainer;
