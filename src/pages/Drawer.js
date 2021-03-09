import React from "react";
import { Route } from "react-router";
import FormatContainer from "./FormatContainer";
import ObjectsContainer from "./ObjectsContainer";
import TemplateContainer from "./TemplateContainer";
import TextContainer from "./TextContainer";
import ThumbnailContainer from "./ThumbnailContainer";

const Drawer = ({ show }) => {
  return (
    <div className={`side-drawer ${show ? "open" : ""}`}>
      <Route path="/product" component={ThumbnailContainer} />
      <Route path="/template" component={TemplateContainer} />
      <Route path="/format" component={FormatContainer} />
      <Route path="/text" component={TextContainer} />
      <Route path="/object" component={ObjectsContainer} />
    </div>
  );
};

export default Drawer;
