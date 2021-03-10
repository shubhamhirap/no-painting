import React from "react";
import { Route } from "react-router";
import FormatContainer from "./FormatContainer";
import ObjectsContainer from "./ObjectsContainer";
import TemplateContainer from "./TemplateContainer";
import TextContainer from "./TextContainer";
import ProductContainer from "./ProductContainer";

const Drawer = ({ show }) => {
  return (
    <div className={`side-drawer ${show ? "open" : ""}`}>
      <Route path="/product" component={ProductContainer} />
      <Route path="/template" component={TemplateContainer} />
      <Route path="/format" component={FormatContainer} />
      <Route path="/text" component={TextContainer} />
      <Route path="/object" component={ObjectsContainer} />
    </div>
  );
};

export default Drawer;
