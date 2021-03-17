import React from "react";
import { FcRefresh } from "react-icons/fc";

const RefreshButton = () => {
  return (
    <div className={`nav-item-link`}>
      <div id="nav-refresh-btn">
        <FcRefresh />
      </div>
    </div>
  );
};

export default RefreshButton;
