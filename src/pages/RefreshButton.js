import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const RefreshButton = () => {
  return (
    <div>
      <Link className={`nav-item-link`} to="/">
        <Button
          id={`nav-refresh-btn`}
          icon={Button.icon.REFRESH}
          backgroundColor={Button.backgroundColor.LIGHT}
        />
      </Link>
    </div>
  );
};

export default RefreshButton;
