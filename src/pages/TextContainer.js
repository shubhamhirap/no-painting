import React from "react";
import TextHolder from "../components/TextHolder";
import Thumbnail from "../components/Thumbnail";

const TextContainer = () => {
  return (
    <>
      <TextHolder extraClass={`mt-5 p-2 h6`} text="Add a Header" />
      <TextHolder
        extraClass={`p-2 h6 font-weight-normal`}
        text="Add a Sub Header"
      />
      <TextHolder
        extraClass={`p-2 h6 font-weight-normal`}
        text="Add a Body Text"
      />

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
    </>
  );
};

export default TextContainer;
