import React from "react";
import Thumbnail from "../components/Thumbnail";

const Drawer = ({ show }) => {
  return (
    <div className={`side-drawer ${show ? "open" : ""}`}>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

export default Drawer;
