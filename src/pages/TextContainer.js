import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import TextHolder from "../components/TextHolder";
import Thumbnail from "../components/Thumbnail";

const TextContainer = () => {
  return (
    <div id="text-container">
      <div id="close-icon-text">
        <GiCrossedBones />
      </div>
      <div id="tc-content">
        <div id="tc-typography">
          <TextHolder extraClass={`h6`} text="Add a Header" />
          <TextHolder
            extraClass={` h6 font-weight-normal`}
            text="Add a Sub Header"
          />
          <TextHolder
            extraClass={` h6 font-weight-normal`}
            text="Add a Body Text"
          />
        </div>

        <div className="font-ex-tn">
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
          <Thumbnail extraClass="thumbnail-item-small" />
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
